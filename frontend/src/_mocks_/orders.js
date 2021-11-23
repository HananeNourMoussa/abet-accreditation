import faker from 'faker';

const orders = [...Array(24)].map((_, index) => ({
  id: faker.datatype.number(),
  name: "SO"+faker.random.number(100),
  items: faker.datatype.number(10),
  total: faker.commerce.price(),
  date: faker.date.past(),
  description: faker.lorem.sentence(),
  csc: faker.random.number(100),
  ge:faker.random.number(100),
  ems:faker.random.number(100),
  cscnum: faker.random.number(10),
  genum:faker.random.number(10),
  emsnum:faker.random.number(10),
}));

export default orders;
