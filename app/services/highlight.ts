import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

export default hljs;
