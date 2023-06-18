"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouters = void 0;
const express_1 = __importDefault(require("express"));
const orderController_1 = require("./orderController");
const router = express_1.default.Router();
// Orders routes
router.post("/", orderController_1.OrderController.createOrders);
router.get("/", orderController_1.OrderController.getOrders);
exports.orderRouters = router;
