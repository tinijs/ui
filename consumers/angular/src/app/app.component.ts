import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

import {registerComponents} from '@tinijs/core';

import {TiniGenericComponent} from '@tinijs/ui-bootstrap/components/generic';
import {TiniGenericUnscopedComponent} from '@tinijs/ui-bootstrap/components/generic-unscoped';
import {TiniBoxComponent} from '@tinijs/ui-bootstrap/components/box';
import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button';
import {IconHeartFillComponent} from '@tinijs/bootstrap-icons/heart-fill';

registerComponents([
  TiniGenericComponent,
  TiniGenericUnscopedComponent,
  TiniBoxComponent,
  TiniButtonComponent,
  IconHeartFillComponent,
]);

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
