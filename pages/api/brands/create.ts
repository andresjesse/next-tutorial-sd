// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Brand } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

type RqError = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Brand | RqError>
) {
  if (req.method === "POST") {
    try {
      // console.log(req.query);
      // console.log(req.headers);
      // console.log(req.body);

      const { name } = req.body;

      if (!name) throw new Error("name is not present!");

      const createdBrand = await prisma.brand.create({
        data: {
          name,
        },
      });

      res.status(201).json(createdBrand);
    } catch (err) {
      res.status(500).json({ error: "internal server error" });
    }
  } else {
    res.status(400).json({ error: "bad request" });
  }
}
