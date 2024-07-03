-- CreateTable
CREATE TABLE `usuarios` (
    `id` CHAR(40) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` CHAR(60) NOT NULL,
    `tipoUsuarioId` CHAR(40) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos_usuarios` (
    `id` CHAR(40) NOT NULL,
    `rotulo` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipamento` (
    `id` CHAR(40) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `descricao` JSON NOT NULL,
    `observacoes` JSON NOT NULL,
    `origem` VARCHAR(191) NOT NULL,
    `numSerie` VARCHAR(191) NOT NULL,
    `status_equipamento` ENUM('Laboratorio', 'Manutencao', 'Emprestado', 'Reservado') NOT NULL DEFAULT 'Laboratorio',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `solicitacoes` (
    `id` CHAR(40) NOT NULL,
    `requisitanteId` VARCHAR(191) NOT NULL,
    `aprovadorId` VARCHAR(191) NOT NULL,
    `data_solicitacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_devolucao` DATETIME(3) NULL,
    `status_solicitacao` ENUM('Solicitado', 'Emprestado', 'Atraso', 'Devolvido') NOT NULL,
    `observacoes` JSON NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SolicitacaoEquipamento` (
    `solicitacaoId` VARCHAR(191) NOT NULL,
    `equipamentoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`solicitacaoId`, `equipamentoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tipos_usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `solicitacoes` ADD CONSTRAINT `solicitacoes_requisitanteId_fkey` FOREIGN KEY (`requisitanteId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `solicitacoes` ADD CONSTRAINT `solicitacoes_aprovadorId_fkey` FOREIGN KEY (`aprovadorId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SolicitacaoEquipamento` ADD CONSTRAINT `SolicitacaoEquipamento_solicitacaoId_fkey` FOREIGN KEY (`solicitacaoId`) REFERENCES `solicitacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SolicitacaoEquipamento` ADD CONSTRAINT `SolicitacaoEquipamento_equipamentoId_fkey` FOREIGN KEY (`equipamentoId`) REFERENCES `Equipamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
