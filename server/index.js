import connectDB from "./src/config/db.js";
import { app, server } from "./src/app.js";

import conf from "./conf.js";

const PORT = conf.PORT || 5000;

// Start the server
const startServer = async () => {
  try {
    await connectDB();
    // app.listen(PORT, () => {
    //   console.log(`⚙️ Server is running at port: ${PORT}`);
    // });
    server.listen(PORT, () => {
      console.log(`⚙️ Server is running at port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();
