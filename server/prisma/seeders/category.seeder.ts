import { Category, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/fa';

const slugify = require('slugify');

const prisma = new PrismaClient();
export async function categorySeeder() {
  await prisma.category.deleteMany({}); // use with caution.

  const amount = 15;

  const categories: Category[] = [];

  for (let i = 0; i < amount; i++) {
    const name = faker.word.noun();
    const category: Category = {
      id: i + 1,
      name,
      slug: slugify(name),
    };

    categories.push(category);
  }

  const addCategories = async () =>
    await prisma.category.createMany({ data: categories });

  addCategories();
}
