import { PrismaClient, Comment } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/fa';
import { randomInt } from '../../utils/randomInt';

const prisma = new PrismaClient();
export async function commentSeeder() {
  await prisma.comment.deleteMany({}); // use with caution.

  const amount = 70;
  const amountOfPosts = 50;

  const comments: Comment[] = [];

  for (let i = 0; i < amount; i++) {
    const comment: Comment = {
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.exampleEmail(),
      postId: randomInt(1, amountOfPosts),
      content: faker.lorem.sentence(),
      parentId: null,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    comments.push(comment);
  }

  const addComments = async () =>
    await prisma.comment.createMany({ data: comments });

  addComments();
}
