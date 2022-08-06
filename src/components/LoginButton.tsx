import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginButton(): JSX.Element {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          className='btn'
          onClick={() => {
            signOut().catch((error) =>
              console.error('error while signing out', error),
            );
          }}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className='text-white bg-purple-600 btn btm-nav-sm hover:bg-purple-700'
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
