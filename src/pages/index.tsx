import type { NextPage } from 'next';
import Layout from '../sections/Layout';
import { trpc } from '../utils/trpc';
import useZustandStore from '../state/zustand';
import LoginButton from '../components/LoginButton';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import Input from '../components/Input';

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
          <Spinner />
        ) : (
          <>
            {isError && error.message === 'UNAUTHORIZED' ? (
              <div className='flex flex-col items-center space-y-4 w-sm'>
                <div className='w-full pt-6 text-2xl text-gray-700 dark:text-slate-300'>
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
                <div className='flex flex-col items-center max-w-md space-y-4'>
                  {!createNewList && (
                    <Button
                      className='rounded-lg bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800'
                      onClick={() => setCreateNewList(!createNewList)}>
                      Create a new List
                    </Button>
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
                                {
                                  onSuccess: async () => {
                                    await refetch();
                                    setCreateNewList(false);
                                    form.reset();
                                  },
                                },
                              );
                            }
                          }
                        }}>
                        <Input
                          id='input_name'
                          name='name'
                          type='text'
                          placeholder='Input your list name'
                        />
                        <Button
                          type='submit'
                          className='rounded-lg bg-gradient-to-r from-fuchsia-400 via-fuchsia-500 to-fuchsia-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-fuchsia-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-fuchsia-300 dark:shadow-lg dark:shadow-fuchsia-800/80 dark:focus:ring-fuchsia-800'>
                          {listMutation.isLoading ? (
                            <>
                              <Spinner /> Loading...
                            </>
                          ) : (
                            'Submit'
                          )}
                        </Button>
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
