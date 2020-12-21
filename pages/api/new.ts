import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
	console.log('@API.new: ', req);
  const book = await prisma.book.create({ data: { ...req.body, genreId: 1 }});
	res.status(200).json({ book });
}