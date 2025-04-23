export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  const response = await fetch("https://public.lindy.ai/api/v1/webhooks/lindy/2f870dac-f051-4945-ac61-fe3c892c8359", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 8a8389015579e2325d2b138db86cca53b56d7bd43e5f9490ab52da58408804dc",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const text = await response.text();

  res.status(response.status).send(text);
}
