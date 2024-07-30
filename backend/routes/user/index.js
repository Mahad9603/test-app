
import { Router } from "express";
import usersController from "../../controller/users/index.js";


const userRouter = Router();

userRouter.get("/users", usersController.getAll);
userRouter.post("/users", usersController.create);



export default userRouter;
