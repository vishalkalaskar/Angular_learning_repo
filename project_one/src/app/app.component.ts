import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TranineregistrationComponent } from './component/tranineregistration/tranineregistration.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,RouterLink,RouterLinkActive,TranineregistrationComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
