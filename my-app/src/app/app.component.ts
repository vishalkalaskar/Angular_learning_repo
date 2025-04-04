import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from "./header/header.component";
import { Profile } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, HeaderComponent,Profile,UserListComponent,StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'this is demo page';
  name="vishal";
}
