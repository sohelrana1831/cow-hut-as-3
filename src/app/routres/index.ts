import express from "express";
import { UserRouters } from "../modules/user/userRoute";
import { cowRouters } from "../modules/cow/cowRouters";
import { orderRouters } from "../modules/order/orderRoute";
const router = express.Router();

const modulesRouters = [
  {
    pathName: "/auth",
    routeName: UserRouters,
  },
  {
    pathName: "/users",
    routeName: UserRouters,
  },
  {
    pathName: "/cows",
    routeName: cowRouters,
  },
  {
    pathName: "/orders",
    routeName: orderRouters,
  },
];
modulesRouters.forEach((route) => router.use(route.pathName, route.routeName));

export default router;
