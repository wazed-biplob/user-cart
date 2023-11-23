import express from 'express';

import { userController } from './user.controller';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createNewUser);
export const userRoutes = router;
