import { useSession, signIn, signOut } from 'next-auth/react';
import Button from './Button';

export default function LoginButton(): JSX.Element {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        User: {session.user.email} <br />
        <Button
          className='relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800'
          onClick={() => {
            signOut().catch((error) =>
              console.error('error while signing out', error),
            );
          }}>
          <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slate-800'>
            Sign out
          </span>
        </Button>
      </>
    );
  }
  return (
    <>
      <button
        type='button'
        className='rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800'
        onClick={() => {
          signIn().catch((error) =>
            console.error('error while signing in', error),
          );
        }}>
        Sign in
      </button>
    </>
  );
}
