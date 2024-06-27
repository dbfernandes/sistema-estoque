import { Router } from 'express';
import produtoRouter from '../resources/produto/product.router';
import exercicioRouter from '../resources/exercicio/exercicio.router';
import languageRouter from '../resources/language/language.router';
import usuarioRouter from '../resources/usuario/usuario.router';
import authRouter from '../resources/auth/auth.router';

const router = Router();

router.use(
  '/produto',
  // #swagger.tags = ['Produto']
  produtoRouter,
);
router.use(
  '/',
  // #swagger.tags = ['Auth']
  authRouter,
);
router.use('/language', languageRouter);
router.use(
  '/usuario',
  // #swagger.tags = ['Usuario']s
  usuarioRouter,
);
router.use(exercicioRouter);

export default router;
