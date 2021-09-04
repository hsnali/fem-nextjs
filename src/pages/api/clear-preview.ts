import { NextApiResponse } from "next";

function handler(req, res: NextApiResponse) {
  res.clearPreviewData();
  res.end("Preview mode disabled");
}

export default handler;
