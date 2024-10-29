import { Router } from 'express';
import projetoController from './projeto.controller';
import isAdmin from '../../middlewares/isAdmin';

const router = Router();

router.get('/',projetoController.list);
router.post('/', isAdmin, projetoController.create);
router.get('/:id',projetoController.getById);
router.delete('/:id', isAdmin, projetoController.remove);

export default router;