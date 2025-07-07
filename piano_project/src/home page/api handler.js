import express from "express"; //web framework to the server 
import cors from "cors"; //to conect the back with the front 
import bodyParser from "body-parser"; //to parse the incoming json data
import dotenv from "dotenv"; //loads environment varibles from a .env file
import { OpenAI } from "openai";

dotenv.config();//loads the .env file (the key)

const app = express();
const port = 5000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.use(cors());
app.use(bodyParser.json());

app.post("/api/your-backend-endpoint", async (req, res) => {
  const { songName } = req.body;

  if (!songName) {
    return res.status(400).json({ error: "Missing songName in request body" });
  }

  try {
    const messages = [
      {
        role: "system",
        content: "You are a helpful assistant that returns ONLY a JSON array of piano keys."
      },
      {
        role: "user",
        content: `Given the song name "${songName}", return a JSON array of piano keys from these possible keys ["a", "s", "d", "f", "g", "h", "j", "k", "l"] that should be played to produce a sound similar to the song. Return only the JSON array, for example: ["a", "d", "f", "g"]. Do not include any explanation or extra text.`
      }
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages,
      temperature: 0.7,
    });

    const content = completion.choices[0].message.content;

    // Try to parse the JSON response
    let keysArray;
    try {
      keysArray = JSON.parse(content);
    } catch (parseError) {
      return res.status(500).json({ error: "Failed to parse AI response as JSON", rawResponse: content });
    }

    res.json({ keys: keysArray });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Failed to get response from AI" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});