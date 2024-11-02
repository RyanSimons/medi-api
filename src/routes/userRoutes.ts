import PathParams, { Request, Response, Router } from "express";
import * as UserController from "../controllers/userController"

const router = Router();

router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.get('/user/:id', UserController.getUser);

export default router;