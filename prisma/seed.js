const { PrismaClient } = require('@prisma/client');
const { bible_categories, bible_clues } = require('./data');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.bible_categories.deleteMany()
    console.log('Deleted records in bible_categories table');

    await prisma.bible_clues.deleteMany()
    console.log('Deleted records in bible_clues table');

    // await prisma.$queryRaw`ALTER TABLE bible_categories SERIAL = 1`
    // console.log('reset bible_categories auto increment to 1');

    // await prisma.$queryRaw`ALTER TABLE bible_clues SERIAL = 1`
    // console.log('reset bible_clues auto increment to 1');
  
    await prisma.bible_categories.createMany({
      data: bible_categories
    });
    console.log('Added bible_categories data');

    await prisma.bible_clues.createMany({
      data: bible_clues
    });
    console.log('Added bible_clues data');
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

load();