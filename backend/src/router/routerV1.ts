import { Router } from 'express';
import authRouter from '../resources/auth/auth.router';
import usuarioRouter from '../resources/usuario/usuario.router';
import equipamentoRouter from '../resources/equipamento/equipamento.router';
import projetoRouter from '../resources/projeto/projetos.router';
import solicitacaoRouter from '../resources/solicitacao/solicitacao.router';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Rotas de autenticação
 */
router.use(
  '/',
  authRouter,
);

/**
 * @swagger
 * tags:
 *   - name: Usuario
 *     description: Rotas de usuário
 */
router.use(
  usuarioRouter,
);

/**
 * @swagger
 * tags:
 *   - name: Equipamento
 *     description: Rotas de equipamento
 */
router.use(
  equipamentoRouter,
);

/**
 * @swagger
 * tags:
 *   - name: Projeto
 *     description: Rotas de projeto
 */
router.use(
  projetoRouter,
);

router.use(
  solicitacaoRouter
);

export default router;
