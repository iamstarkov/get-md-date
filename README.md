# get-md-date

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get date from markdown article

## Install

    npm install --save get-md-date

## Usage

```js
import getDate from 'get-md-date';

const input = `
# title

21 asd qwe

22 *Dec* 2015

23 December 2015

24 Декабрь 2015
`.trim();

getDate('DD MMM YYYY',  'en', input).text;     // 21 Dec 2015
getDate('DD MMM YYYY',  'en', input).html;     // 22 <em>Dec</em> 2015
getDate('DD MMM YYYY',  'en', input).sortable; // 1450645200000
getDate('DD MMMM YYYY', 'en', input).text;     // 23 December 2015
getDate('DD MM YYYY',   'en', input); // throw new Error:
                                      // Input has no date in given
                                      // pattern 'DD MM YYYY' and locale 'en'
```

## API

### getDate(pattern, locale, input)

#### pattern

*Required*  
Type: `String`

Momentjs [pattern][pattern] for date, e.g. `DD MMMM YYYY`.

[pattern]: http://momentjs.com/docs/#/displaying/format/

#### locale

*Required*  
Type: `String`

One of 83 available in momentjs [locales](i18n), e.g. `en`, `fr` or `ru`.

[i18n]: http://momentjs.com/docs/#/i18n/

#### input

*Required*  
Type: `String`

Markdown string.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/get-md-date
[npm-image]: https://img.shields.io/npm/v/get-md-date.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/get-md-date
[travis-image]: https://img.shields.io/travis/iamstarkov/get-md-date.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/get-md-date
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/get-md-date.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/get-md-date
[depstat-image]: https://david-dm.org/iamstarkov/get-md-date.svg?style=flat-square
