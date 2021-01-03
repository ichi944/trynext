import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  res.status(200).json({ message: 'hello' });
}
