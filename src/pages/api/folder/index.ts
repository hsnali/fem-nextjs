import { NextApiResponse } from "next";
import nc from "next-connect";
import { folder } from "@src/db";
import middleware from "@src/middleware/all";
import onError from "@src/middleware/error";
import { Request } from "@src/@types/interfaces";

const handler = nc<Request, NextApiResponse>({
  onError,
})
  .use(middleware)
  .post(async (req, res) => {
    const newFolder = await folder.createFolder(req.db, {
      createdBy: req.user.id,
      name: req.body.name,
    });
    res.send({ data: newFolder });
  });

export default handler;
