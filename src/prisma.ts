import type { Meme } from './types/index.js';

let idSeq = 1;
const memes: Meme[] = [];

export const prisma = {
  meme: {
    async create({ data }: { data: Meme }): Promise<Meme> {
      const created: Meme = { id: idSeq++, title: data.title, url: data.url, userId: data.userId };
      memes.push(created);
      return created;
    },
  },
};
