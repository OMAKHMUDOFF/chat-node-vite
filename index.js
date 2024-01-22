import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

const PORT = process.env.PORT || 4100;
app.listen(4100, () => console.log(`Server was started on ${PORT} port`));
