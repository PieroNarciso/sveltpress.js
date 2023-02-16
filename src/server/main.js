import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/message", (_, res) => {
  res.send("Hello World!");
});

ViteExpress.listen(app, 3000, () => console.log("Server running on port 3000"));
