-- CreateTable
CREATE TABLE "bible_categories" (
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "bible_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bible_clues" (
    "description" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "point_value" INTEGER NOT NULL,
    "bible_category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "bible_clues_pkey" PRIMARY KEY ("id")
);
