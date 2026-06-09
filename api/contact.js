const CONTACT_API_URL =
  "https://api.ayatiworks.com/api/v1/public/swaram/contact_us/records";

const API_KEY =
  process.env.AYATI_API_KEY ||
  "f5a4ee7d75445be656bd8529c143b2567a3eeedfdcdfa6cbac5652f0a3f92289";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(req.body),
    });

    const contentType = response.headers.get("content-type") || "";
    const text = await response.text();

    res.status(response.status);

    if (contentType.includes("application/json")) {
      return res.json(text ? JSON.parse(text) : {});
    }

    return res.send(text);
  } catch (error) {
    console.error("Contact form submit failed:", error);
    return res.status(500).json({ message: "Unable to submit contact form" });
  }
}
