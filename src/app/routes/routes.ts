import express, { Router } from "express";
import userRoute from "../modules/users/user.route";
import authRoute from "../modules/auth/auth.route";
import taskRoute from "../modules/task/task.route";

const router = express.Router();

type IModuleRouter = { path: string; route: Router };

const moduleRoutes: IModuleRouter[] = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/task",
    route: taskRoute,
  },
];

moduleRoutes.forEach((moduleRoute: IModuleRouter) => {
  router.use(moduleRoute.path, moduleRoute.route);
});

export default router;
