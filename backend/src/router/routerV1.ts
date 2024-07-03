import { Router } from 'express';
import authRouter from '../resources/auth/auth.router';
import usuarioRouter from '../resources/usuario/usuario.router';

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

export default router;
