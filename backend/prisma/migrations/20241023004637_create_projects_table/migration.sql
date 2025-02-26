/*
  Warnings:

  - Added the required column `projetoId` to the `SolicitacaoEquipamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SolicitacaoEquipamento` ADD COLUMN `projetoId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Projeto` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(200) NOT NULL,
    `responsavel` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SolicitacaoEquipamento` ADD CONSTRAINT `SolicitacaoEquipamento_projetoId_fkey` FOREIGN KEY (`projetoId`) REFERENCES `Projeto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
