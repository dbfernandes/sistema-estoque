import { Router } from 'express';
import usuarioController from './usuario.controller';
const router = Router();
import schemaUsuario from './usuario.schema';
import validate from '../../middlewares/validate';

router.get('/', usuarioController.index);
router.post('/', validate(schemaUsuario), usuarioController.create);
router.get('/:id', usuarioController.getUserById);
router.put('/:id', validate(schemaUsuario), usuarioController.update);
router.delete('/:id', usuarioController.remove);

export default router;
