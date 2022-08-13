import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      // add any user properties you want to expose to the client
      id: string;
    } & DefaultSession['user'];
  }
}
