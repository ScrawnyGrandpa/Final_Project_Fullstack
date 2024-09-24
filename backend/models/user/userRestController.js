import Router from "express";
import { createUser, getAll, readUser, updateUser, deleteUser, login } from "./userAccessDataService.js"
import { handleError } from "../../utils/handleErrors.js";
import { authentication } from "../../authentication/authenticationService.js";

const userRouter = Router();

// MUST ADD AUTHENTICATION WHEREVER NEEDED LATER

// get all users
userRouter.get("/", async (req, res) => {
    try {
        res.send(await getAll());
    } catch (error) {
        res.status(500).send({ error: "An error occurred" });
    }
});

// create user
userRouter.post("/", async (req, res) => {
    try {
        res.send(await createUser(req.body));
    }
    catch (error) {
        handleError(res, 500, error.message);
    }
});

// get user by ID
userRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { _id, isAdmin } = req.user;
        if (_id !== id && !isAdmin) {
            return handleError(res, 401, "You can't access other user's data");
        }
        res.send(await readUser(id));
    } catch (error) {
        handleError(res, 500, error.message);
    }
});

// update user
userRouter.put("/:id", async (req, res) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return handleError(res, 404, "User not found");
        }
        res.send(updatedUser);
    } catch (error) {
        return handleError(res, 500, error.message);
    }
});

// update user parameter
userRouter.patch("/:id", async (req, res) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return handleError(res, 404, "User not found");
        }
        res.send(updatedUser);
    } catch (error) {
        return handleError(res, 500, error.message)
    }
});

// delete user
userRouter.delete('/:id', async (req, res) => {
    try {
        res.send(await deleteUser(req.params.id));
    } catch (error) {
        return handleError(res, 500, error.message)
    }
});

// login user
userRouter.post("/login", async (req, res) => {
    try {
        res.send(await login(req.body.email, req.body.password));
    } catch (error) {
        return handleError(res, 500, error.message)
    }
});

export { userRouter };