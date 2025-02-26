/*
  Warnings:

  - You are about to alter the column `numSerie` on the `Equipamento` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `responsavel` on the `Projeto` table. All the data in the column will be lost.
  - The primary key for the `SolicitacaoEquipamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `solicitacaoId` on the `SolicitacaoEquipamento` table. All the data in the column will be lost.
  - You are about to drop the `solicitacoes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipoEquipamento` to the `Equipamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tombamento` to the `Equipamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsavelId` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emprestimoId` to the `SolicitacaoEquipamento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `SolicitacaoEquipamento` DROP FOREIGN KEY `SolicitacaoEquipamento_solicitacaoId_fkey`;

-- DropForeignKey
ALTER TABLE `solicitacoes` DROP FOREIGN KEY `solicitacoes_aprovadorId_fkey`;

-- DropForeignKey
ALTER TABLE `solicitacoes` DROP FOREIGN KEY `solicitacoes_requisitanteId_fkey`;

-- AlterTable
ALTER TABLE `Equipamento` ADD COLUMN `tipoEquipamento` VARCHAR(191) NOT NULL,
    ADD COLUMN `tombamento` VARCHAR(191) NOT NULL,
    MODIFY `numSerie` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Projeto` DROP COLUMN `responsavel`,
    ADD COLUMN `responsavelId` CHAR(40) NOT NULL;

-- AlterTable
ALTER TABLE `SolicitacaoEquipamento` DROP PRIMARY KEY,
    DROP COLUMN `solicitacaoId`,
    ADD COLUMN `emprestimoId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`emprestimoId`, `equipamentoId`);

-- DropTable
DROP TABLE `solicitacoes`;

-- CreateTable
CREATE TABLE `Emprestimo` (
    `id` CHAR(40) NOT NULL,
    `requisitanteId` VARCHAR(191) NOT NULL,
    `aprovadorId` VARCHAR(191) NOT NULL,
    `data_solicitacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_devolucao` DATETIME(3) NULL,
    `status_solicitacao` ENUM('Solicitado', 'Emprestado', 'Atraso', 'Devolvido') NOT NULL,
    `observacoes` VARCHAR(5000) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Emprestimo` ADD CONSTRAINT `Emprestimo_requisitanteId_fkey` FOREIGN KEY (`requisitanteId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimo` ADD CONSTRAINT `Emprestimo_aprovadorId_fkey` FOREIGN KEY (`aprovadorId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SolicitacaoEquipamento` ADD CONSTRAINT `SolicitacaoEquipamento_emprestimoId_fkey` FOREIGN KEY (`emprestimoId`) REFERENCES `Emprestimo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projeto` ADD CONSTRAINT `Projeto_responsavelId_fkey` FOREIGN KEY (`responsavelId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
