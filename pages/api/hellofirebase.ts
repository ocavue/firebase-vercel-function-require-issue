// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { addDoc } from "firebase/firestore";

type Data = {
  name: string;
  time: string;
  addDoc: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({
      name: "Hello firebase",
      time: new Date().toISOString(),
      addDoc: String(addDoc),
    });
}
