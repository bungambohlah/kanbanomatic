import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../sections/Layout';
import { trpc } from '../utils/trpc';
import useZustandStore from '../state/zustand';
import LoginButton from '../components/LoginButton';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import Input from '../components/Input';
import { PlusIcon } from '@heroicons/react/solid';

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
      <div className='flex flex-col items-center justify-center w-full overflow-hidden'>
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
                <div className='flex flex-col items-center w-full space-y-4'>
                  {!createNewList && (
                    <Button
                      className='rounded-lg bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-fuchsia-300 dark:focus:ring-fuchsia-800'
                      onClick={() => setCreateNewList(!createNewList)}>
                      Create a new List
                    </Button>
                  )}
                  <div className='flex flex-col flex-auto w-full space-y-4'>
                    {createNewList && (
                      <form
                        className='flex items-center justify-center space-x-4'
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
                      <div className='flex flex-grow px-10 mt-4 space-x-6 overflow-auto'>
                        {data.lists.map((list) => (
                          <div
                            key={list.id}
                            className='flex flex-col flex-shrink-0 w-72'>
                            {/* board title */}
                            <div className='flex items-center flex-shrink-0 h-10 px-2'>
                              <span className='block text-lg font-semibold text-gray-900 text-start dark:text-gray-300'>
                                {list.name}
                              </span>
                              <span className='flex items-center justify-center w-5 h-5 ml-2 text-sm font-bold bg-black rounded bg-opacity-10 text-fuchsia-600 dark:bg-white dark:bg-opacity-30 dark:text-fuchsia-400'>
                                1
                              </span>
                              <button
                                className='flex items-center justify-center w-6 h-6 ml-auto rounded text-fuchsia-600 hover:bg-fuchsia-500 hover:text-fuchsia-100 dark:text-fuchsia-500 dark:hover:text-fuchsia-100'
                                title='add'>
                                <PlusIcon className='w-4 h-4' />
                              </button>
                            </div>
                            {/* board cards */}
                            <div className='flex flex-col pb-2 overflow-auto '>
                              <div className='relative flex flex-col items-start p-4 mt-3 rounded-lg cursor-pointer group bg-zinc-300 bg-opacity-30 hover:bg-opacity-40 dark:bg-zinc-100 dark:bg-opacity-90 dark:hover:bg-opacity-100'>
                                <button
                                  className='absolute top-0 right-0 flex items-center justify-center w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex'
                                  title='optional'>
                                  <svg
                                    className='w-4 h-4 fill-current'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'>
                                    <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
                                  </svg>
                                </button>
                                <span className='flex items-center h-6 px-3 text-xs font-semibold text-pink-600 bg-pink-200 rounded-full dark:bg-pink-100 dark:text-pink-500'>
                                  Design
                                </span>
                                <h4 className='mt-3 text-sm font-medium text-slate-700 dark:text-slate-600'>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit.
                                </h4>
                                <div className='flex items-center w-full mt-3 text-xs font-medium text-gray-400'>
                                  <div className='flex items-center'>
                                    <svg
                                      className='w-4 h-4 text-gray-400 fill-current'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                      fill='currentColor'>
                                      <path
                                        fillRule='evenodd'
                                        d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                                        clipRule='evenodd'></path>
                                    </svg>
                                    <span className='ml-1 leading-none'>
                                      Dec 12
                                    </span>
                                  </div>
                                  <div className='relative flex items-center ml-4'>
                                    <svg
                                      className='relative w-4 h-4 text-gray-400 fill-current'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                      fill='currentColor'>
                                      <path
                                        fillRule='evenodd'
                                        d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z'
                                        clipRule='evenodd'></path>
                                    </svg>
                                    <span className='ml-1 leading-none'>4</span>
                                  </div>
                                  <div className='flex items-center ml-4'>
                                    <svg
                                      className='w-4 h-4 text-gray-400 fill-current'
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 20 20'
                                      fill='currentColor'>
                                      <path
                                        fillRule='evenodd'
                                        d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                                        clipRule='evenodd'></path>
                                    </svg>
                                    <span className='ml-1 leading-none'>1</span>
                                  </div>
                                  <div className='ml-auto'>
                                    <Image
                                      className='w-6 h-6 rounded-full'
                                      width='24px'
                                      height='24px'
                                      src='https://randomuser.me/api/portraits/women/72.jpg'
                                      alt='profile'
                                      title='profile pic'
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
