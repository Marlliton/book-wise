/*
  Warnings:

  - You are about to drop the column `provider_accountId` on the `accounts` table. All the data in the column will be lost.
  - You are about to drop the column `email_verified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `verification_tokens` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[provider,provider_account_id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider_account_id` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `accounts_provider_provider_accountId_key` ON `accounts`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `provider_accountId`,
    ADD COLUMN `provider_account_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `email_verified`,
    DROP COLUMN `image`,
    ADD COLUMN `avatar_url` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `verification_tokens`;

-- CreateIndex
CREATE UNIQUE INDEX `accounts_provider_provider_account_id_key` ON `accounts`(`provider`, `provider_account_id`);
