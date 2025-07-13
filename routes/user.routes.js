import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", (req, res) => res.send({ title: "GET user Details" }));

userRouter.post("/", (req, res) => res.send({ title: "CREATE a user" }));

userRouter.put("/", (req, res) => res.send({ title: "UPDATE user" }));

userRouter.delete("/", (req, res) => res.send({ title: "DELETE  users" }));

export default userRouter;
