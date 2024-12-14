import Router from "express";
import { createBoss, getAllBosses, readBoss, updateBoss, patchBoss, deleteBoss } from "./bossAccessDataService.js"
import { handleError } from "../../utils/handleErrors.js";
import { authentication } from "../../authentication/authenticationService.js";
import { checkAdminAccess } from "../../middlewares/userAccess.js";

const bossRouter = Router();

// get all bosses
bossRouter.get("/", async (req, res) => {
    try {
        res.send(await getAllBosses());
    } catch (error) {
        res.status(500).send({ error: "An error occurred" });
    }
});

// get boss by ID
bossRouter.get("/:id", async (req, res) => {
    try {
        const boss = await readBoss(req.params.id);
        if (!boss) return handleError(res, 404, "Boss not found");
        res.send(boss);
    } catch (error) {
        handleError(res, 500, error.message);
    }
});

// create boss
bossRouter.post("/", authentication, checkAdminAccess, async (req, res) => {
    try {
        res.send(await createBoss(req.body));
    }
    catch (error) {
        handleError(res, 500, error.message);
    }
});

// Update a boss (PUT)
bossRouter.put("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        const updatedBoss = await updateBoss(req.params.id, req.body);
        if (!updatedBoss) {
            return handleError(res, 404, "Boss not found");
        }
        res.send(updatedBoss);
    } catch (error) {
        return handleError(res, 500, error.message);
    }
});


// Patch a boss (PATCH)
bossRouter.patch("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        const updatedBoss = await patchBoss(req.params.id, req.body);
        if (!updatedBoss) {
            return handleError(res, 404, "Boss not found");
        }
        res.send(updatedBoss);
    } catch (error) {
        return handleError(res, 500, error.message);
    }
});

// delete boss
bossRouter.delete("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        res.send(await deleteBoss(req.params.id));
    } catch (error) {
        return handleError(res, 500, error.message)
    }
});

export { bossRouter };