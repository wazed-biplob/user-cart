import express from 'express';

import { userController } from './user.controller';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createNewUser);
router.get('/:userId', userController.getUserById);
export const userRoutes = router;
