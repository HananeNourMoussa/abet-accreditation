import faker from 'faker';
import { sample } from 'lodash';

const products = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  quantity: faker.datatype.number(7),
  pph: faker.commerce.price(),
  acquisition_price: faker.commerce.price(),
  selling_price: faker.commerce.price(),
  status: sample(['Non Soldé', 'Soldé']),
}));

export default products;
