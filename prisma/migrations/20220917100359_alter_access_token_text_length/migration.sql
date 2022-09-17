-- DropIndex
DROP INDEX `Account_access_token_idx` ON `Account`;

-- AlterTable
ALTER TABLE `Account` MODIFY `access_token` TEXT NULL;
