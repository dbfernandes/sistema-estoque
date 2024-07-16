-- AlterTable
ALTER TABLE `Equipamento` MODIFY `descricao` VARCHAR(5000) NOT NULL,
    MODIFY `observacoes` VARCHAR(5000) NOT NULL;

-- AlterTable
ALTER TABLE `solicitacoes` MODIFY `observacoes` VARCHAR(5000) NOT NULL;
