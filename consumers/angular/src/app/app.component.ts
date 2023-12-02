import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {useComponents} from 'tinijs';

import {TiniButtonComponent} from '@tinijs/ui-bootstrap/components/button';
import {IconHeartFillComponent} from '@tinijs/bootstrap-icons/heart-fill';

useComponents([TiniButtonComponent, IconHeartFillComponent]);

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}