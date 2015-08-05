import { match, text, html } from 'commonmark-helpers';
import { partial } from 'ramda';
import trimTag from 'trim-html-tag';
import moment from 'moment';

const isDate = (format, locale, node) =>
  moment(text(node), format, locale, true).isValid();

export default (format, locale, input) => {
  const node = match(input, partial(isDate, format, locale));
  if (!node) return;
  return {
    text: text(node),
    html: trimTag(html(node)),
    unix: moment.utc(text(node), format, locale, true).unix(),
    moment: moment(text(node), format, locale, true),
    node
  };
};
