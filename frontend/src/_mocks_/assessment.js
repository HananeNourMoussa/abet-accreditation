import faker from 'faker';
import { sample } from 'lodash';


const products = [...Array(7)].map((_, index) => ({
  id: faker.datatype.number(),
  name: sample(['Quiz', 'Midterm', 'Final']) + faker.datatype.number(5),
  grade: faker.random.number(100),
  course: sample(['EGR', 'PHY', 'CHE', 'CSC']) + sample(["1402", '1401', "2303"]) ,
  phoneNumber: faker.phone.phoneNumberFormat(),
  email: faker.name.firstName()+"@aui.ma",
  major: sample(['GE', 'EMS', 'CSC']),
  status: sample(['active', 'banned']),
  date: faker.date.past()
}));

export default products;
