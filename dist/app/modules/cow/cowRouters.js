"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowRouters = void 0;
const express_1 = __importDefault(require("express"));
const cowController_1 = require("./cowController");
const router = express_1.default.Router();
router.post("/", cowController_1.CowController.createCow);
router.get("/", cowController_1.CowController.getAllCows);
router.get("/:id", cowController_1.CowController.getSingleCow);
router.patch("/:id", cowController_1.CowController.updateCow);
router.delete("/:id", cowController_1.CowController.deleteCow);
exports.cowRouters = router;
