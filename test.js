import assert, { equal, throws } from 'assert';
import getDate from './index';
import { isMoment } from 'moment';

const input = `
# title

21 asd qwe

22 *Dec* 2015

23 December 2015

24 Décembre 2015`;

it('should get text from getDate', () =>
  equal(getDate('DD MMM YYYY', 'en', input).text, '22 Dec 2015'));

it('should get html from getDate', () =>
  equal(getDate('DD MMM YYYY', 'en', input).html, '22 <em>Dec</em> 2015'));

it('should get sortable from getDate', () =>
  equal(getDate('DD MMM YYYY', 'en', input).unix, 1450742400));

it('should get moment from getDate', () =>
  assert(isMoment(getDate('DD MMM YYYY', 'en', input).moment)));

it('should get text from getDate with with other format', () =>
  equal(getDate('DD MMMM YYYY', 'en', input).text, '23 December 2015'));

it('should get text from getDate with with other locale', () =>
  equal(getDate('DD MMMM YYYY', 'fr', input).text, '24 Décembre 2015'));

it('should get undefined if input is empty', () =>
  equal(getDate('DD MMMM YYYY', 'en', ''), undefined));

it('should get undefined if format is unfound', () =>
  equal(getDate('D M Y', 'en', input), undefined));
