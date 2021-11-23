import { Router } from "express";
import { SendStockUpdateController } from "./controllers/SendStockUpdateController";

const router = Router();

const sendStockUpdateController = new SendStockUpdateController();

router.post("/stock_updates", sendStockUpdateController.handle);

router.get("/ping", (req, res) => {
  res.send("pong?");
});

export { router };
