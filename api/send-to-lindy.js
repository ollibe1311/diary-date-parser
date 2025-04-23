export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  const response = await fetch("https://public.lindy.ai/api/v1/webhooks/lindy/72eb8442-f0f0-48c8-adb0-bd1648db91b8", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 1afcb88b059dc1cff2040341331782ee64d3123c9ed85c6c4aeca8860db5378f",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const text = await response.text();

  res.status(response.status).send(text);
}
