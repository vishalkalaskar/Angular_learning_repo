import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet,NavigationEnd } from '@angular/router';
import { IndexpageComponent } from './component/indexpage/indexpage.component';
import { filter } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,IndexpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

}
