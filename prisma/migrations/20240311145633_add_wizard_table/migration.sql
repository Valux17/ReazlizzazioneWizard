/*
  Warnings:

  - You are about to drop the column `productId` on the `Wizard` table. All the data in the column will be lost.
  - You are about to drop the column `scans` on the `Wizard` table. All the data in the column will be lost.
  - Added the required column `step` to the `Wizard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wizard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "step" INTEGER NOT NULL,
    "productHandle" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Wizard" ("createdAt", "destination", "id", "productHandle", "productVariantId", "shop", "title") SELECT "createdAt", "destination", "id", "productHandle", "productVariantId", "shop", "title" FROM "Wizard";
DROP TABLE "Wizard";
ALTER TABLE "new_Wizard" RENAME TO "Wizard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
