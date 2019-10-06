import {util1, util2} from '../Util';

describe('Util', () => {
  describe('Interaction', () => {
    it('execute method util1', () => {
      const newString = util1('util1');
      expect(newString).toBe('util1+1');
    });

    it('execute method util2', () => {
      const newString = util2('util2');
      expect(newString).toBe('util2+2');
    });
  });
});
