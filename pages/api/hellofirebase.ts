// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as firebaseApp from "firebase/app";
import * as firebaseFirestore from "firebase/firestore";
import * as firebaseAdmin from "firebase-admin";
import { addDoc } from "@firebase/firestore";

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
    firebaseApp: trim(String(firebaseApp.getApp)),
    firebaseFirestore: trim(String(firebaseFirestore.addDoc)),
    firebaseAdmin: trim(String(firebaseAdmin.SDK_VERSION)),
    addDoc: trim(String(addDoc)),
    version: 1,
  });
}
