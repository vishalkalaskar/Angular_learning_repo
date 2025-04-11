import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'route-app';


  form: FormGroup; // ✅ define 'form'

  // constructor(private router : Router){};
   constructor(private fb: FormBuilder,private router : Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password : ['', [Validators.required]],
    });
  }

  loginfunction()
  {
    console.log(this.form.value);
    const username= this.form.value.username;
    const password = this.form.value.password;
     if(username ==='admin'&& password==='1234')
     {
       this.router.navigate(['/index'])
     }
     else 
     {
       alert("invalid crenditals");
     }
  }

  goToprofile()
  {
   // this.router.navigate(['/profile', 101]); // route param
    this.router.navigate(['profile'], { queryParams: { id: 101, name: 'John' } });

  }
  
}
