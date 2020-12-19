import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const data = { title: 'まともなれんあい(上)', author: 'くらら', yearReleased: 2020}
  const book = await prisma.book.findFirst()
	res.status(200).json({ book });
}