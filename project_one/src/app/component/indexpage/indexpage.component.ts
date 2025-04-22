import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink, RouterLinkActive, RouterOutlet,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-indexpage',
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './indexpage.component.html',
  styleUrl: './indexpage.component.css'
})
export class IndexpageComponent {

  isHomeRoute = false;
  
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomeRoute = event.url === '/index';
      });
  }
}
