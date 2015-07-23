import { equal } from 'assert';
import getMdDate from './index';

it('should getMdDate', () => {
  equal(getMdDate('unicorns'), 'unicorns');
});
