import app from "./app.js";
import connectDB from "./database/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Server Startup Failed:", error);
  });
