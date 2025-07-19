import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  getUserSubscription,
  createSubscription,
} from "../controllers/susbcription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subscription" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get subscription details" })
);
subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update a subscription" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete a subscription" })
);
subscriptionRouter.get("/user/:id", authorize, getUserSubscription);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "Cancel all subscription" })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "Get upcoming renewals" })
);

export default subscriptionRouter;
