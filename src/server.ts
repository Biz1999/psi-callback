if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import ip from "ip";

import { router } from "./routes";

var cors = require("cors");
import xmlparser from "express-xml-bodyparser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xmlparser());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);
app.listen(8888, () => console.log(`Server rodando...`));
