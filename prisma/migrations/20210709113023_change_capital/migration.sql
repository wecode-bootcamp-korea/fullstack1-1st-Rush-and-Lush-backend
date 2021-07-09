/*
  Warnings:

  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(8,3)` to `Decimal(8,2)`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `price` DECIMAL(8, 2) NOT NULL;
