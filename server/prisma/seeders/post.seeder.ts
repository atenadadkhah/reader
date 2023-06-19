import { Post, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/fa';
import { randomInt } from '../../utils/randomInt';

const slugify = require('slugify');

const prisma = new PrismaClient();
export async function postSeeder() {
  await prisma.post.deleteMany({}); // use with caution.

  const amount = 100;

  const posts: Post[] = [];

  for (let i = 0; i < amount; i++) {
    const title = faker.lorem.sentence();
    const post: Post = {
      id: i + 1,
      authorId: Math.round(Math.random() * 50),
      title,
      slug: slugify(title),
      content: faker.lorem.paragraphs({ min: 25, max: 40 }),
      image: `/images/posts/${Math.ceil(Math.random() * 5)}.jpg`,
      editorsPick: [true, false][randomInt(0, 1)],
      views: randomInt(50, 2000),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    posts.push(post);
  }

  const addPosts = async () => await prisma.post.createMany({ data: posts });

  addPosts();
}
