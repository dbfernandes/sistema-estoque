import { Router } from 'express';
import projetoController from './projeto.controller';
import isAdmin from '../../middlewares/isAdmin';

const router = Router();

router.get('/projeto/',projetoController.list);
router.post('/projeto/', isAdmin, projetoController.create);
router.get('/projeto/:id',projetoController.getById);
router.delete('/projeto/:id', isAdmin, projetoController.remove);

export default router;