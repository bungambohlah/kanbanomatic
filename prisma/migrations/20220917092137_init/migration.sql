-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,
    `access_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` VARCHAR(191) NULL,
    `session_state` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Account_userId_idx`(`userId`),
    INDEX `Account_type_idx`(`type`),
    INDEX `Account_provider_idx`(`provider`),
    INDEX `Account_providerAccountId_idx`(`providerAccountId`),
    INDEX `Account_refresh_token_idx`(`refresh_token`),
    INDEX `Account_access_token_idx`(`access_token`),
    INDEX `Account_expires_at_idx`(`expires_at`),
    INDEX `Account_token_type_idx`(`token_type`),
    INDEX `Account_scope_idx`(`scope`),
    INDEX `Account_id_token_idx`(`id_token`),
    INDEX `Account_createdAt_idx`(`createdAt`),
    INDEX `Account_updatedAt_idx`(`updatedAt`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_sessionToken_idx`(`sessionToken`),
    INDEX `Session_userId_idx`(`userId`),
    INDEX `Session_expires_idx`(`expires`),
    INDEX `Session_createdAt_idx`(`createdAt`),
    INDEX `Session_updatedAt_idx`(`updatedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_name_idx`(`name`),
    INDEX `User_email_idx`(`email`),
    INDEX `User_emailVerified_idx`(`emailVerified`),
    INDEX `User_image_idx`(`image`),
    INDEX `User_createdAt_idx`(`createdAt`),
    INDEX `User_updatedAt_idx`(`updatedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    INDEX `VerificationToken_identifier_idx`(`identifier`),
    INDEX `VerificationToken_token_idx`(`token`),
    INDEX `VerificationToken_expires_idx`(`expires`),
    INDEX `VerificationToken_createdAt_idx`(`createdAt`),
    INDEX `VerificationToken_updatedAt_idx`(`updatedAt`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `List` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `List_name_idx`(`name`),
    INDEX `List_userId_idx`(`userId`),
    INDEX `List_createdAt_idx`(`createdAt`),
    INDEX `List_updatedAt_idx`(`updatedAt`),
    UNIQUE INDEX `List_name_userId_key`(`name`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
