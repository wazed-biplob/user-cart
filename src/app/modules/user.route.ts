import express from 'express';

import { userController } from './user.controller';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createNewUser);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUserInfo);
export const userRoutes = router;
