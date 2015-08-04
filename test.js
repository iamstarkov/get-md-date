import { equal, throws } from 'assert';
import getDate from './index';

const input = `
# title

21 asd qwe

22 *Dec* 2015

23 December 2015

24 Декабрь 2015
`.trim();

it('should text getDate', () => {
  equal(getDate('DD MMM YYYY', 'en', input).text, '22 Dec 2015');
});

it('should html getDate', () => {
  equal(getDate('DD MMM YYYY', 'en', input).html, '22 <em>Dec</em> 2015');
});

it('should sortable getDate', () => {
  equal(getDate('DD MMM YYYY', 'en', input).sortable, 1450742400);
});

it('should getDate with with other format', () => {
  equal(getDate('DD MMMM YYYY', 'en', input).text, '23 December 2015');
});

it('should throw an error if date not found', () => {
  throws(() => {
    getDate('DD MM YYYY', 'en', input);
  }, /Input has no date in given format 'DD MM YYYY' and locale 'en'/);
});

// TODO: moment crashs if you try to strictly validate locale dates #2527
// https://github.com/moment/moment/issues/2527
it.skip('should locale getDate', () => {
  equal(getDate('DD MMMM YYYY', 'ru', input).text, '21 Декабря 2015');
});
