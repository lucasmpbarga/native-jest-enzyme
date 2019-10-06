// __tests__/user-test.js
jest.mock('../app/services/requestApi', () =>
  jest.requireActual('../__mocks__/requestApi'),
);
import * as user from '../app/services/user';

describe('Services implementation', () => {
  it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
  });
});
