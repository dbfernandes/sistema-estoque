import { Router } from 'express'
import solicitacaoController from './emprestimo.controller';

const router = Router();

router.post('/solicitacao/', solicitacaoController.create)
router.get('/solicitacao/', solicitacaoController.list)
router.get('/solicitacao/:id', solicitacaoController.getById);
router.delete('/solicitacao/:id', solicitacaoController.remove);
router.put('/solicitacao/:id', solicitacaoController.update);
export default router;