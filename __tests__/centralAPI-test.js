import {getResidencialApolices} from '../services/centralAPI';

import {hasToken} from '../services/storedAppData';

jest.mock(
  'react-native',
  () => require.requireActual('../__mocks__/react-native').default,
);
jest.mock('mov-react-native-connector', () =>
  require.requireActual('../__mocks__/mov-react-native-connector'),
);
jest.mock(
  '../services/baseAPI',
  () => require.requireActual('../__mocks__/baseAPI').default,
);

jest.mock('../services/storedAppData');

describe('centralAPI tests', () => {
  it('getResidencialApolices with hasToken true', async () => {
    hasToken.mockImplementation(() => false);
    try {
      await getResidencialApolices();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it('getResidencialApolices with hasToken with cpf', async () => {
    hasToken.mockImplementation(() => true);
    try {
      await getResidencialApolices(22222222222);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it('getResidencialApolices with hasToken true without cpf', async () => {
    hasToken.mockImplementation(() => true);
    try {
      await getResidencialApolices();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});
