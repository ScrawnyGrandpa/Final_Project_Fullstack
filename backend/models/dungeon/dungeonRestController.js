import Router from "express";
import { createDungeon, getAll, readDungeon, updateDungeon, patchDungeon, deleteDungeon } from "./dungeonAccessDataService.js"
import { handleError } from "../../utils/handleErrors.js";
import { saveUpdatedData } from "../../utils/populateDatabase.js";
import { authentication } from "../../authentication/authenticationService.js";
import { checkAdminAccess } from "../../middlewares/userAccess.js";

const dungeonRouter = Router();

// get all dungeons
dungeonRouter.get("/", async (req, res) => {
    try {
        res.send(await getAll());
    } catch (error) {
        res.status(500).send({ error: "An error occurred" });
    }
});

// get dungeon by ID
dungeonRouter.get("/:id", async (req, res) => {
    try {
        const dungeon = await readDungeon(req.params.id);
        if (!dungeon) return handleError(res, 404, "Dungeon not found");
        res.send(dungeon);
    } catch (error) {
        handleError(res, 500, error.message);
    }
});

// create Dungeon
dungeonRouter.post("/", authentication, checkAdminAccess, async (req, res) => {
    try {
        res.send(await createDungeon(req.body));
    }
    catch (error) {
        handleError(res, 500, error.message);
    }
});

// Update a Dungeon (PUT)
dungeonRouter.put("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        const updatedDungeon = await updateDungeon(req.params.id, req.body);

        if (!updatedDungeon) {
            return handleError(res, 404, "Dungeon not found");
        }

        saveUpdatedData(updatedDungeon, "Dungeons");
        res.send(updatedDungeon);
    } catch (error) {
        return handleError(res, 500, error.message);
    }
});

// Patch a Dungeon (PATCH)
dungeonRouter.patch("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        const updatedDungeon = await patchDungeon(req.params.id, req.body);

        if (!updatedDungeon) {
            return handleError(res, 404, "Dungeon not found");
        }

        saveUpdatedData(updatedDungeon, "Dungeons");
        res.send(updatedDungeon);
    } catch (error) {
        return handleError(res, 500, error.message);
    }
});

// delete Dungeon
dungeonRouter.delete("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        res.send(await deleteDungeon(req.params.id));
    } catch (error) {
        return handleError(res, 500, error.message)
    }
});

export { dungeonRouter };