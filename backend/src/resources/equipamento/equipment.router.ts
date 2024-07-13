import { Router } from 'express';
import equipamentoController from './equipment.controller';
const router = Router();
import schemaEquipamento from './equipment.schema';
import validate from '../../middlewares/validate';
import isAdmin from '../../middlewares/isAdmin';

router.get('/', equipamentoController.index);
router.post(
  '/',
  isAdmin,
  validate(schemaEquipamento),
  equipamentoController.create,
);
router.get('/:id', equipamentoController.read);
router.put('/:id', isAdmin, equipamentoController.update);
router.delete('/:id', isAdmin, equipamentoController.remove);

export default router;
