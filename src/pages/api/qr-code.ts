import type { NextApiRequest, NextApiResponse } from "next";

const QRCode = require("qrcode");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { requestedURL } = req.body;

  const options = {
    margin: 1,
    width: 300,
  };

  QRCode.toDataURL(requestedURL, options, (err: any, url: any) => {
    if (err) res.status(500).json({ error: err });

    res.status(200).json({ url });
  });
}
