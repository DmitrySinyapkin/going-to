-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "name_original" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "description_raw" TEXT NOT NULL,
    "released" TEXT NOT NULL,
    "tba" BOOLEAN NOT NULL,
    "updated" TEXT NOT NULL,
    "background_image" TEXT NOT NULL,
    "background_image_additional" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "rating_top" INTEGER NOT NULL,
    "screenshots_count" INTEGER NOT NULL,
    "userWishlistId" INTEGER NOT NULL,
    "userFinishedId" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("userWishlistId","userFinishedId")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL,
    "games_count" INTEGER NOT NULL,
    "image_background" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Screenshot" (
    "id" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Screenshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" SERIAL NOT NULL,
    "released_at" TEXT NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlatformDesc" (
    "id" INTEGER NOT NULL,
    "platformId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PlatformDesc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requirements" (
    "id" SERIAL NOT NULL,
    "minimum" TEXT NOT NULL,
    "recommended" TEXT NOT NULL,
    "platformId" INTEGER NOT NULL,

    CONSTRAINT "Requirements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Game_id_key" ON "Game"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_id_key" ON "Genre"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PlatformDesc_platformId_key" ON "PlatformDesc"("platformId");

-- CreateIndex
CREATE UNIQUE INDEX "Requirements_platformId_key" ON "Requirements"("platformId");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_userWishlistId_fkey" FOREIGN KEY ("userWishlistId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_userFinishedId_fkey" FOREIGN KEY ("userFinishedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Screenshot" ADD CONSTRAINT "Screenshot_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Platform" ADD CONSTRAINT "Platform_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlatformDesc" ADD CONSTRAINT "PlatformDesc_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requirements" ADD CONSTRAINT "Requirements_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
