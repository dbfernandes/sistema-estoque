import { Router } from 'express';
import authController from './auth.controller';

const router = Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - Auth
 *     description: Cadastro de usuário
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Dados do usuário para cadastro
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - password
 *             - email
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/signup', authController.signup);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     description: Login de usuário
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Dados do usuário
 *         schema:
 *           type: object
 *           required:
 *             - username
 *             - password
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *       401:
 *         description: Não autorizado
 */
router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;
