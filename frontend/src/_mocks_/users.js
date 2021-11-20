import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  phoneNumber: faker.phone.phoneNumberFormat(),
  email: faker.internet.email(),
  status: sample(['active', 'banned']),
  memberSince: faker.date.past()
}));

export default users;
