import faker from 'faker';

const orders = [...Array(24)].map((_, index) => ({
  id: faker.datatype.number(),
  name: faker.name.findName(),
  items: faker.datatype.number(10),
  total: faker.commerce.price(),
  date: faker.date.past()
}));

export default orders;
