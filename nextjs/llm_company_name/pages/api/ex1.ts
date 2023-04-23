import { NextApiRequest, NextApiResponse } from "next/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {

  try {
    const response = await fetch(process.env.LC_ENDPOINT_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        product: req.body.product,
      }),
    });

    const data = await response.json()
    return res.status(200).json(data)
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
  }
}
