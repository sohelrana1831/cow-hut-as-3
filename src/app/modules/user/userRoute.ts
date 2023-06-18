import express from "express";
import { UserController } from "./userController";
import validateRequest from "../../../middleware/validateRequest";
import { UserValidation } from "./userValidation";
const router = express.Router();

router.post(
  "/signup",
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

router.get("/", UserController.getAllUres);
router.get("/:id", UserController.getSingleUser);
router.patch(
  "/:id",
  validateRequest(UserValidation.createUserZodSchema),
  UserController.updateUser
);
router.delete("/:id", UserController.deleteUser);

export const UserRouters = router;
