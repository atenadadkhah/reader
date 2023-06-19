import { CategoriesOnPosts, PrismaClient } from '@prisma/client';
import { randomInt } from '../../utils/randomInt';

const prisma = new PrismaClient();

export async function categoriesOnPostsSeeder() {
  await prisma.categoriesOnPosts.deleteMany({}); // use with caution.

  const amount = 50;
  const amountOfCategories = 15;

  const categoriesOnPosts: CategoriesOnPosts[] = [];

  for (let j = 0; j < amount; j++) {
    const randomCategories = [];

    for (let i = 0; i < randomInt(2, 6); i++) {
      let randomCategory = randomInt(1, amountOfCategories);

      while (randomCategories.includes(randomCategory))
        randomCategory = randomInt(1, amountOfCategories);

      const categoryOnPost: CategoriesOnPosts = {
        categoryId: randomCategory,
        postId: j + 1,
      };
      randomCategories.push(randomCategory);

      categoriesOnPosts.push(categoryOnPost);
    }
  }

  const addCategoriesOnPosts = async () =>
    await prisma.categoriesOnPosts.createMany({ data: categoriesOnPosts });

  addCategoriesOnPosts();
}
