import type { NextPage } from 'next';
import Layout from '../sections/Layout';
import { trpc } from '../utils/trpc';
import useZustandStore from '../state/zustand';
import LoginButton from '../components/LoginButton';

const Home: NextPage = () => {
  const { createNewList, setCreateNewList } = useZustandStore();
  const listMutation = trpc.useMutation('list.create');
  const { data, isLoading, isError, error, refetch } = trpc.useQuery(
    ['list.getAll'],
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full'>
        {isLoading ? (
          <div className='pt-6 text-lg text-gray-700 dark:text-slate-300'>
            Loading...
          </div>
        ) : (
          <>
            {isError && error.message === 'UNAUTHORIZED' ? (
              <div className='flex flex-col flex-auto space-y-4'>
                <div className='pt-6 text-2xl text-gray-700 dark:text-slate-300'>
                  Start Create your first kanban board, but You need to login
                  first.
                </div>
                <LoginButton />
              </div>
            ) : (
              <>
                {(!data || !data?.lists.length) && (
                  <div className='pt-6 text-2xl text-gray-700 dark:text-slate-300'>
                    Start Create your first kanban board
                  </div>
                )}
                <div className='pt-6 text-2xl text-gray-700 dark:text-slate-300'>
                  {!createNewList && (
                    <div
                      className='btn mix-blend-darken dark:mix-blend-lighten'
                      onClick={() => setCreateNewList(!createNewList)}>
                      Create a new List
                    </div>
                  )}
                  <div className='flex flex-col flex-auto space-y-4'>
                    {createNewList && (
                      <form
                        className='flex justify-center space-x-4'
                        onSubmit={(e) => {
                          e.preventDefault();
                          // get input values
                          if (e.target instanceof HTMLFormElement) {
                            const form = e.target;
                            const data = new FormData(form);
                            const { name } = Object.fromEntries(data.entries());
                            if (typeof name === 'string') {
                              // create new list
                              listMutation.mutate(
                                { name },
                                { onSuccess: () => refetch() },
                              );
                            }
                          }
                        }}>
                        <input
                          name='name'
                          type='text'
                          placeholder='Input your list name'
                          className='w-full max-w-xs ered input-secondary'
                        />
                        <input
                          type='submit'
                          value='Submit'
                          className='btn btn-info mix-blend-darken dark:mix-blend-lighten'
                        />
                      </form>
                    )}
                    {data?.lists && (
                      <div className='flex justify-center space-x-4'>
                        {data.lists.map((list) => (
                          <div key={list.id}>{list.name}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
