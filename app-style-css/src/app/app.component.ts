import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-style-css';
  display=true;

  tdiv = true;

  funhid(){
    this.display=!this.display;
  }

  togllefun()
  {
    this.tdiv=!this.tdiv;
  }
  
  color=2;
  
   elseiffun(val:number)
   {
     this.color=val;
   }


}
