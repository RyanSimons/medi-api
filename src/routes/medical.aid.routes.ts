import { Router } from "express";
import * as MedicalController from "../controllers/medical.aid.controller"

const router = Router();

router.post('/medical', MedicalController.createMedicalAid);
// router.put('/user/:id', UserController.updateUser);
// router.delete('/user/:id', UserController.deleteUser);
// router.get('/user/:id', UserController.getUser);

export default router;