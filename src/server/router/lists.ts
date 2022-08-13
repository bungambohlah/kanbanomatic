import { createRouter } from './context';
import { z } from 'zod';
import { prisma } from '../../server/db/client';
import { List } from '@prisma/client';

export const listRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      const userId = ctx.session?.user?.id;
      if (userId) {
        const lists = await prisma.list.findMany({ where: { userId } });
        return { lists };
      }

      return { lists: [] as List[] };
    },
  })
  .mutation('create', {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input, ctx }) {
      const { name } = input;
      const userId = ctx.session?.user?.id;
      if (userId) {
        const createList = await prisma.list.create({
          data: {
            name,
            user: {
              connect: {
                id: userId,
              },
            },
          },
        });
        return { list: createList };
      }

      return { list: null };
    },
  });
