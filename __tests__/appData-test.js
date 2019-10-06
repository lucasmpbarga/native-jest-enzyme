import * as stored from '../app/services/appData';

describe('centralAPI tests', () => {
  it('getResidencialApolices with hasToken true without cpf', async () => {
    expect(stored.hasToken()).toBeFalsy();
  });
});
