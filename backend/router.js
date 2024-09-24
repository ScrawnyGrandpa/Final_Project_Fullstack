import express from "express";
import { userRouter } from "./models/user/userRestController.js";
import { bossRouter } from "./models/boss/bossRestController.js";
import { handleError } from "./utils/handleErrors.js";

const router = express.Router();

router.use("/npc", bossRouter);
router.use("/user", userRouter);


/* router.use((req, res) => {
    const error = new Error("path not Found")
    return handleError(res, 404, error.message)
}); */

export { router };