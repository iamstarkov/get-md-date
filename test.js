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
  equal(getDate('DD MMM YYYY', 'en', input).sortable, 1450738800000);
});

it('should getDate with with other pattern', () => {
  equal(getDate('DD MMMM YYYY', 'en', input).text, '23 December 2015');
});

it('should throw an error if date not found', () => {
  throws(() => {
    getDate('DD MM YYYY', 'en', input);
  }, /Input has no date in given pattern 'DD MM YYYY' and locale 'en'/);
});

// TODO: should work, but i’m doing smth wrong or it is a bug in moment:
// var moment = require('moment')
// moment('21 декабря 2015', 'DD MMM YYYY', 'ru', true).isValid();
// TypeError: Cannot read property '0' of undefined
//     at Locale.localeMonthsParse [as monthsParse] (/Users/matmuchrapna/projects/get-md-date/node_modules/moment/moment.js:654:49)
//     at Object.<anonymous> (/Users/matmuchrapna/projects/get-md-date/node_modules/moment/moment.js:621:36)
//     at addTimeToArrayFromToken (/Users/matmuchrapna/projects/get-md-date/node_modules/moment/moment.js:575:26)
//     at configFromStringAndFormat (/Users/matmuchrapna/projects/get-md-date/node_modules/moment/moment.js:1192:17)
//     at createFromConfig (/Users/matmuchrapna/projects/get-md-date/node_modules/moment/moment.js:1319:13)
//     at createLocalOrUTC (/Users/matmuchrapna/projects/get-md-date/node_modules/moment/moment.js:1375:16)
//     at local__createLocal (/Users/matmuchrapna/projects/get-md-date/node_modules/moment/moment.js:1379:16)
//     at utils_hooks__hooks (/Users/matmuchrapna/projects/get-md-date/node_modules/moment/moment.js:16:29)
//     at repl:1:1
//     at REPLServer.defaultEval (repl.js:154:27)
it.skip('should locale getDate', () => {
  equal(getDate('DD MMMM YYYY', 'ru', input).text, '21 Декабря 2015');
});
