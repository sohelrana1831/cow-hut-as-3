import express from "express";
import validateRequest from "../../../middleware/validateRequest";
import { CowController } from "./cowController";
const router = express.Router();

router.post("/", CowController.createCow);

router.get("/", CowController.getAllCows);
router.get("/:id", CowController.getSingleCow);
router.patch("/:id", CowController.updateCow);
router.delete("/:id", CowController.deleteCow);

export const cowRouters = router;
