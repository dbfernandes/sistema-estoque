import { Router } from 'express';
import authRouter from '../resources/auth/auth.router';
import usuarioRouter from '../resources/usuario/usuario.router';
import equipamentoRouter from '../resources/equipamento/equipamento.router';

const router = Router();

router.use(
  '/',
  // #swagger.tags = ['Auth']
  authRouter,
);

router.use(
  '/usuario',
  // #swagger.tags = ['Usuario']s
  usuarioRouter,
);

router.use(
  '/equipamento',
  // #swagger.tags = ['Equipamento']s
  equipamentoRouter,
);

export default router;
