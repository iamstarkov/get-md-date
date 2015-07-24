import { equal, throws } from 'assert';
import getDate from './index';

const input = `
# title

_21 asd qwe_

_21 Dec 2015_

_21 December 2015_

_21 December 2015_

_24 **8** 2015_

_21 Декабрь 2015_
`.trim();

it('should getDate text with "DD MMM YYYY / en"', () => {
  equal(getDate('DD MMM YYYY', 'en', input).text, '21 Dec 2015');
});

it('should getDate html with "DD M YYYY / en"', () => {
  equal(getDate('DD M YYYY', 'en', input).html, '<em>24 <strong>8</strong> 2015</em>');
});

it('should getDate sortable with "DD MMMM YYYY / en"', () => {
  equal(getDate('DD MMMM YYYY', 'en', input).sortable, 1450645200000);
});

it('should getDate with "DD MMMM YYYY / en"', () => {
  equal(getDate('DD MMMM YYYY', 'en', input).text, '21 December 2015');
});

it('should throw an error with "DD MM YYYY / en"', () => {
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
it.skip('should getDate "DD MMM YYYY / ru"', () => {
  const options = { pattern: 'DD MMMM YYYY', locale: 'ru' };
  equal(getDate(options, input).text, '21 Декабря 2015');
});
