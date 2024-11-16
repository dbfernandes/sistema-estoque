import { Router } from 'express';
import usuarioController from './usuario.controller';
const router = Router();
import schemaUsuario from './usuario.schema';
import validate from '../../middlewares/validate';

router.get('/usuario/', usuarioController.index);
router.post('/usuario/', validate(schemaUsuario), usuarioController.create);
router.get('/usuario/:id', usuarioController.getUserById);
router.put('/usuario/:id', validate(schemaUsuario), usuarioController.update);
router.delete('/usuario/:id', usuarioController.remove);

export default router;
