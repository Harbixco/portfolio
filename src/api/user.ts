import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';
 
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const user = await kv.hgetall('user:me');
  return response.status(200).json(user);
}