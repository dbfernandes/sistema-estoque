import { Router } from 'express';
import equipamentoController from './equipamento.controller';
const router = Router();
import schemaEquipamento from './equipamento.schema';
import validate from '../../middlewares/validate';
import isAdmin from '../../middlewares/isAdmin';

router.get('/equipamento/', equipamentoController.index);
router.post(
  '/equipamento/',
  isAdmin,
  validate(schemaEquipamento),
  equipamentoController.create,
);
router.get('/equipamento/:id', equipamentoController.read);
router.put(
  '/equipamento/:id',
  isAdmin,
  validate(schemaEquipamento),
  equipamentoController.update,
);
router.delete('/equipamento/:id', isAdmin, equipamentoController.remove);

export default router;
