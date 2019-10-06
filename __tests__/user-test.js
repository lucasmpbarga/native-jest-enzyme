// __tests__/user-test.js
jest.mock('../services/requestn', () =>
  jest.requireActual('../__mocks__/requestn'),
);
import * as user from '../services/user';

describe('Services implementation', () => {
  it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
  });
});
