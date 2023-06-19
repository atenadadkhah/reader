import { PrismaClient, User } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/fa';

const slugify = require('slugify');

const prisma = new PrismaClient();
export async function userSeeder() {
  await prisma.user.deleteMany({}); // use with caution.

  const amount = 50;

  const users: User[] = [];

  for (let i = 0; i < amount; i++) {
    const name = faker.person.fullName();
    const user: User = {
      id: i + 1,
      email: faker.internet.exampleEmail(),
      name,
      slug: slugify(name),
      password: faker.internet.password(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    users.push(user);
  }

  const addUsers = async () => await prisma.user.createMany({ data: users });

  addUsers();
}
