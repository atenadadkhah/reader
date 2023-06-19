import { PrismaClient, Profile } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/fa';

const prisma = new PrismaClient();
export async function profileSeeder() {
  await prisma.profile.deleteMany({}); // use with caution.

  const amount = 50;

  const profiles: Profile[] = [];

  for (let i = 0; i < amount; i++) {
    const profile: Profile = {
      id: i + 1,
      userId: i + 1,
      image: `/images/users/${Math.ceil(Math.random() * 5)}.jpg`,
      bio: faker.lorem.sentence(),
      definition: faker.person.jobTitle(),
    };

    profiles.push(profile);
  }

  const addProfiles = async () =>
    await prisma.profile.createMany({ data: profiles });

  addProfiles();
}
