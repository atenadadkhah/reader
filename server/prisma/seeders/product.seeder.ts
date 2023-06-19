import { PrismaClient, Product } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/fa';
import { randomInt } from '../../utils/randomInt';

const prisma = new PrismaClient();
export async function productSeeder() {
  await prisma.product.deleteMany({}); // use with caution.

  const amount = 12;

  const products: Product[] = [];

  for (let i = 0; i < amount; i++) {
    const product: Product = {
      id: i + 1,
      name: 'test',
      slug: 'test',
      isNew: [false, true][randomInt(0, 1)],
      short: null,
      price: randomInt(20, 200),
      discount: 0,
      image: `/images/products/${Math.ceil(Math.random() * 5)}.jpg`,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    products.push(product);
  }

  const addProducts = async () =>
    await prisma.product.createMany({ data: products });

  addProducts();
}
