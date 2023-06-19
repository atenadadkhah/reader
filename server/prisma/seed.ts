import { PrismaClient } from '@prisma/client';
import { userSeeder } from './seeders/user.seeder';
import { postSeeder } from './seeders/post.seeder';
import { categorySeeder } from './seeders/category.seeder';
import { categoriesOnPostsSeeder } from './seeders/categories-on-posts.seeder';
import { commentSeeder } from './seeders/comment.seeder';
import { profileSeeder } from './seeders/profile.seeder';
import { productSeeder } from './seeders/product.seeder';

const prisma = new PrismaClient();

async function main() {
  // await userSeeder();
  // await postSeeder();
  // await categorySeeder();
  // await categoriesOnPostsSeeder();
  // await commentSeeder();
  // await profileSeeder();
  // await productSeeder();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
