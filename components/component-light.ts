import {PropertyValues} from 'lit';
import {TiniElement} from 'tinijs';

export class TiniComponentLightComponent extends TiniElement {
  static readonly defaultTagName = 'tini-component-light';
  readonly componentName = 'component-light';
  readonly referLightDOM = true;

  willUpdate(changedValues: PropertyValues) {
    super.willUpdate(changedValues);
  }

  protected createRenderRoot() {
    return this;
  }
}
