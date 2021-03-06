import sirv from "sirv";
// import serve from "serve";
import polka from "polka";
// const path = require("path");
// import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";

// import session from "express-session";
// import sessionFileStore from "session-file-store";
// import bodyParser from "body-parser";

// const FileStore = sessionFileStore(session);

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development"; // You can also use Express

// express()
polka()
  .use(
    // "/photography",
    compression({ threshold: 0 }),
    // sirv("static", { dev }),
    sirv("static", { dev: dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });

// const app = express();
// const dist = "../export";
// app.use(express.static(dist));
