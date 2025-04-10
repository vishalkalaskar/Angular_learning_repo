import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'route-app';

   constructor(private router : Router){};
   
  goToprofile()
  {
   // this.router.navigate(['/profile', 101]); // route param
    this.router.navigate(['profile'], { queryParams: { id: 101, name: 'John' } });

  }
}
