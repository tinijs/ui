import {
  Component,
  TiniComponent,
  Input,
  html,
  css,
  ref,
  createRef,
  Ref,
} from '@tinijs/core';

import coreStyle from '../../styles/bootstrap/base/core';

import hljs from '../helpers/highlight';

export const APP_CODE = 'app-code';
@Component({
  theming: {
    styling: {
      bootstrap: [coreStyle],
    },
  },
})
export class AppCodeComponent extends TiniComponent {
  static styles = css`
    pre code.hljs {
      display: block;
      overflow-x: auto;
      padding: 1em;
    }
    code.hljs {
      padding: 3px 5px;
    }
    .hljs {
      color: #adbac7;
      background: #22272e;
    }
    .hljs-doctag,
    .hljs-keyword,
    .hljs-meta .hljs-keyword,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-type,
    .hljs-variable.language_ {
      color: #f47067;
    }
    .hljs-title,
    .hljs-title.class_,
    .hljs-title.class_.inherited__,
    .hljs-title.function_ {
      color: #dcbdfb;
    }
    .hljs-attr,
    .hljs-attribute,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-operator,
    .hljs-selector-attr,
    .hljs-selector-class,
    .hljs-selector-id,
    .hljs-variable {
      color: #6cb6ff;
    }
    .hljs-meta .hljs-string,
    .hljs-regexp,
    .hljs-string {
      color: #96d0ff;
    }
    .hljs-built_in,
    .hljs-symbol {
      color: #f69d50;
    }
    .hljs-code,
    .hljs-comment,
    .hljs-formula {
      color: #768390;
    }
    .hljs-name,
    .hljs-quote,
    .hljs-selector-pseudo,
    .hljs-selector-tag {
      color: #8ddb8c;
    }
    .hljs-subst {
      color: #adbac7;
    }
    .hljs-section {
      color: #316dca;
      font-weight: 700;
    }
    .hljs-bullet {
      color: #eac55f;
    }
    .hljs-emphasis {
      color: #adbac7;
      font-style: italic;
    }
    .hljs-strong {
      color: #adbac7;
      font-weight: 700;
    }
    .hljs-addition {
      color: #b4f1b4;
      background-color: #1b4721;
    }
    .hljs-deletion {
      color: #ffd8d3;
      background-color: #78191b;
    }

    pre {
      font-size: 14px;
      margin-top: 0;
      border-radius: var(--size-radius);
      overflow: hidden;
    }
  `;

  private readonly codeRef: Ref<HTMLElement> = createRef();
  @Input({type: String}) declare readonly code?: string;

  protected updated() {
    hljs.highlightElement(this.codeRef.value!);
  }

  protected render() {
    return html`<pre><code ${ref(this.codeRef)}>${this.code}</code></pre>`;
  }
}
