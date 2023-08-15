import {LitElement, html} from 'lit';
import {property} from 'lit/decorators.js';
import {classMap, ClassInfo} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ColorsAndGradients, Sizes} from '@tinijs/core';

export const BREADCRUMB = 'breadcrumb';
export const TINI_BREADCRUMB = `tini-${BREADCRUMB}`;

/* UseBases(common) */
export class TiniBreadcrumbComponent extends LitElement {
  static readonly defaultTagName = TINI_BREADCRUMB;

  // @property({type: String}) declare prop?: string;

  private rootClasses: ClassInfo = {};
  willUpdate() {
    this.rootClasses = {
      [BREADCRUMB]: true,
    };
  }

  protected render() {
    return html`
      <breadcrumb
        part=${BREADCRUMB}
        class=${classMap(this.rootClasses)}
      ></breadcrumb>
    `;
  }
}
