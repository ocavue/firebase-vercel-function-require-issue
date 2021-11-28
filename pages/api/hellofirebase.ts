// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "services/firebase-debug";

type Data = Record<string, string | number>;

function trim(s: string): string {
  return s.slice(0, 20);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: "Hello firebase",
    time: new Date().toISOString(),
    version: 1,

    auth: trim(String(auth)),
  });
}
