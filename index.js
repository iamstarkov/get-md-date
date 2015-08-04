import { match, text, html } from 'commonmark-helpers';
import { partial } from 'ramda';
import trimTag from 'trim-html-tag';
import moment from 'moment';

const isDate = (format, locale, node) =>
  moment(text(node), format, locale, true).isValid();

const result = (format, locale, node) => ({
  text: text(node),
  html: trimTag(html(node)),
  sortable: moment.utc(text(node), format, locale, true).unix(),
  moment: moment(text(node), format, locale, true),
  node
});

export default (format, locale, input) => {
  const node = match(input, partial(isDate, format, locale));
  if (!node) {
    throw new Error(`Input has no date in given format '${format}' and locale '${locale}'`);
  }
  return result(format, locale, node);
};
