// @ts-nocheck

import { NextApiResponse } from "next";

function handler(req, res: NextApiResponse) {
  res.setPreviewData({});
  res.redirect(req.query.route);
}

export default handler;
