import Router from "express";
import { createBoss, getAll, readBoss, updateBoss, patchBoss, deleteBoss } from "./bossAccessDataService.js"
import { Boss } from "./Bosses.js"
import { handleError } from "../../utils/handleErrors.js";
import { saveUpdatedData } from "../../utils/populateDatabase.js";
import { authentication } from "../../authentication/authenticationService.js";
import { checkAdminAccess } from "../../middlewares/userAccess.js";

const bossRouter = Router();

// get all bosses
bossRouter.get("/", async (req, res) => {
    try {
        res.send(await getAll());
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
        const updatedBoss = await Boss.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        }).lean();

        if (!updatedBoss) {
            return handleError(res, 404, "Boss not found");
        }

        if (updatedBoss.guide) {
            updatedBoss.guide.normal = updatedBoss.guide.normal.map(item => {
                const { _id, ...rest } = item;
                return rest;
            });
            updatedBoss.guide.heroic = updatedBoss.guide.heroic.map(item => {
                const { _id, ...rest } = item;
                return rest;
            });
        }

        saveUpdatedData(updatedBoss);
        res.send(updatedBoss);
    } catch (error) {
        return handleError(res, 500, error.message);
    }
});

// Patch a boss (PATCH)
bossRouter.patch("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        const updatedBoss = await Boss.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        }).lean();

        if (!updatedBoss) {
            return handleError(res, 404, "Boss not found");
        }

        if (updatedBoss.guide) {
            updatedBoss.guide.normal = updatedBoss.guide.normal.map(item => {
                const { _id, ...rest } = item;
                return rest;
            });
            updatedBoss.guide.heroic = updatedBoss.guide.heroic.map(item => {
                const { _id, ...rest } = item;
                return rest;
            });
        }

        saveUpdatedData(updatedBoss);
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