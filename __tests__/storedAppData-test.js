import * as stored from '../services/storedAppData.js';

describe('centralAPI tests', () => {
  it('getResidencialApolices with hasToken true without cpf', async () => {
    expect(stored.hasToken()).toBeFalsy();
  });
});
