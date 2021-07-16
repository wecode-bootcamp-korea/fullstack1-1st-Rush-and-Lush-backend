/*
  Warnings:

  - You are about to drop the column `order_number` on the `order_status` table. All the data in the column will be lost.
  - You are about to drop the column `shippingId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `shippings` table. All the data in the column will be lost.
  - Added the required column `order_status` to the `order_status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_ibfk_5`;

-- AlterTable
ALTER TABLE `order_status` DROP COLUMN `order_number`,
    ADD COLUMN `order_status` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `shippingId`,
    ADD COLUMN `shipping_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `shippings` DROP COLUMN `order_id`;

-- AddForeignKey
ALTER TABLE `orders` ADD FOREIGN KEY (`shipping_id`) REFERENCES `shippings`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
