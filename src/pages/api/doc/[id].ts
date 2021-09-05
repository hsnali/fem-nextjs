import { NextApiResponse } from "next";
import nc from "next-connect";
import middleware from "@src/middleware/all";
import { Request } from "@src/@types/interfaces";
import { doc } from "@src/db";
import onError from "@src/middleware/error";

const handler = nc<Request, NextApiResponse>({
  onError,
})
  .use(middleware)
  .put(async (req, res) => {
    const updated = await doc.updateOne(
      req.db,
      req.query.id as string,
      req.body
    );

    res.send({ data: updated });
  });

export default handler;
