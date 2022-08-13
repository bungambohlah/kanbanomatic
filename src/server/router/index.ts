// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { listRouter } from './lists';
import { authRouter } from './auth';
import { TRPCError } from '@trpc/server';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('auth.', authRouter)
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next();
  })
  .merge('list.', listRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
