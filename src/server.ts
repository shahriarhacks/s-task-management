import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

process.on("uncaughtException", (error) => {
  console.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.db_uri as string);
    console.log(` Database is connected successfully`);

    server = app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect database", error);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

// process.on("SIGTERM", () => {
//   log.info("SIGTERM is received");
//   if (server) {
//     server.close();
//   }
// });
