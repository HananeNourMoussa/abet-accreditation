import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  grade: faker.random.number(100),
  course: sample(['EGR', 'PHY', 'CHE', 'CSC']) + sample(["1402", '1401', "2303"]) ,
  phoneNumber: faker.phone.phoneNumberFormat(),
  email: faker.name.firstName()+"@aui.ma",
  major: sample(['GE', 'EMS', 'CSC']),
  status: sample(['active', 'banned']),
  memberSince: faker.date.past()
}));

export default users;
