import Router from "express";
import { createTrash, getAll, readTrash, updateTrash, patchTrash, deleteTrash } from "./trashAccessDataService.js"
import { handleError } from "../../utils/handleErrors.js";
import { authentication } from "../../authentication/authenticationService.js";
import { checkAdminAccess } from "../../middlewares/userAccess.js";

const trashRouter = Router();

// get all trashes
trashRouter.get("/", async (req, res) => {
    try {
        res.send(await getAll());
    } catch (error) {
        res.status(500).send({ error: "An error occurred" });
    }
});

// get trash by ID
trashRouter.get("/:id", async (req, res) => {
    try {
        const trash = await readTrash(req.params.id);
        if (!trash) return handleError(res, 404, "Trash not found");
        res.send(trash);
    } catch (error) {
        handleError(res, 500, error.message);
    }
});

// create trash
trashRouter.post("/", authentication, checkAdminAccess, async (req, res) => {
    try {
        res.send(await createTrash(req.body));
    }
    catch (error) {
        handleError(res, 500, error.message);
    }
});

// update trash
trashRouter.put("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        const updatedTrash = await updateTrash(req.params.id, req.body);
        if (!updatedTrash) {
            return handleError(res, 404, "Trash not found");
        }
        res.send(updatedTrash);
    } catch (error) {
        return handleError(res, 500, error.message);
    }
});

// patch trash parameter
trashRouter.patch("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        const updatedTrash = await patchTrash(req.params.id, req.body);
        if (!updatedTrash) {
            return handleError(res, 404, "Trash not found");
        }
        res.send(updatedTrash);
    } catch (error) {
        return handleError(res, 500, error.message)
    }
});

// delete trash
trashRouter.delete("/:id", authentication, checkAdminAccess, async (req, res) => {
    try {
        res.send(await deleteTrash(req.params.id));
    } catch (error) {
        return handleError(res, 500, error.message)
    }
});

export { trashRouter };