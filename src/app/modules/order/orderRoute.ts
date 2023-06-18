import express from "express";
import { OrderController } from "./orderController";
const router = express.Router();

// Orders routes

router.post("/", OrderController.createOrders);
router.get("/", OrderController.getOrders);

export const orderRouters = router;
