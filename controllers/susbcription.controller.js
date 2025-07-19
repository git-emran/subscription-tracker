import { workflowClient } from "../config/upstash.js";
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    await workflowClient.trigger({
      url: `${SERVER_URL}`
    })

    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};

export default createSubscription;

export const getUserSubscription = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("Your are not the owner of the account");

      error.status = 401;

      throw error;
    }
    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(201).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
};
