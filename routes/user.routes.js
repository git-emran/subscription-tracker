import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => res.send({ title: "CREATE a user" }));

userRouter.put("/", (req, res) => res.send({ title: "UPDATE user" }));

userRouter.delete("/", (req, res) => res.send({ title: "DELETE  users" }));

export default userRouter;
