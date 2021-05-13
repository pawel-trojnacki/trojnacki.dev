import sanitizeHtml from 'sanitize-html';

const renderMarkup = (html: string) => ({ __html: sanitizeHtml(html) });

export default renderMarkup;
