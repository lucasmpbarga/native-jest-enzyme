import {getResidentialPolicies} from '../app/services/adminApi';

import {hasToken} from '../app/services/appData';

jest.mock(
  'react-native',
  () => require.requireActual('../__mocks__/react-native').default,
);
jest.mock(
  '../app/services/api',
  () => require.requireActual('../__mocks__/api').default,
);

jest.mock('../app/services/appData');

describe('centralAPI tests', () => {
  it('getResidentialPolicies with hasToken true', async () => {
    hasToken.mockImplementation(() => false);
    try {
      await getResidentialPolicies();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it('getResidentialPolicies with hasToken with cpf', async () => {
    hasToken.mockImplementation(() => true);
    try {
      await getResidentialPolicies(22222222222);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it('getResidentialPolicies with hasToken true without cpf', async () => {
    hasToken.mockImplementation(() => true);
    try {
      await getResidentialPolicies();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});
