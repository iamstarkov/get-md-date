import { match, text, html } from 'commonmark-helpers';
import { partial } from 'ramda';
import trimTag from 'trim-html-tag';
import moment from 'moment';

const isDate = (pattern, locale, node) =>
  moment(text(node), pattern, locale, true).isValid();

const result = node => ({
  text: text(node),
  html: trimTag(html(node)),
  sortable: new Date(text(node)).getTime(),
  node
});

export default (pattern, locale, input) => {
  const dateNode = match(input, partial(isDate, pattern, locale));
  if (!dateNode) {
    throw new Error(`Input has no date in given pattern '${pattern}' and locale '${locale}'`);
  }
  return result(dateNode);
};
