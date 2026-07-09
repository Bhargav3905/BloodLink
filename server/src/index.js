import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

await import ("./server.js");
