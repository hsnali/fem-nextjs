import { NextApiResponse } from "next";
import nc from "next-connect";
import { doc } from "@src/db";
import middleware from "@src/middleware/all";
import onError from "@src/middleware/error";
import { Request } from "@src/@types/interfaces";

const handler = nc<Request, NextApiResponse>({
  onError,
})
  .use(middleware)
  .post(async (req, res) => {
    const newDoc = await doc.createDoc(req.db, {
      createdBy: req.user.id,
      folder: req.body.folder,
      name: req.body.name,
    });
    res.send({ data: newDoc });
  });

export default handler;
