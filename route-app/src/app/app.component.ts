import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators, FormControl, FormControlDirective, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { eventNames } from 'process';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule,CommonModule,FormsModule,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'route-app';


  form: FormGroup; // ✅ define 'form' must match [forGroup] name

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

  data= new FormGroup({
    // name : new FormControl('anil'),
    // email : new FormControl('anil@gmail.com'),
    // pass : new FormControl('123434'),
     name: new FormControl('',[Validators.required]),
      email:new FormControl('', [Validators.required, Validators.email]),
      pass:new FormControl('',[Validators.required, Validators.minLength(6)]),
  })






  get name() {
    return this.data.get('name');
  }

  get email() {
    return this.data.get('email');
  }

  get pass() {
    return this.data.get('pass');
  }

  onsubmit() {
    if (this.data.valid) {
      console.log(this.data.value);
    } else {
      this.data.markAllAsTouched();
    }
  }

  onsubmittemplate(templateform:NgForm)
  {
    console.log(templateform.value);
  }

  parentMessage = 'Hello from Parent!';
  messageFromChild = '';

  handleChildMessage(message: string) {
    this.messageFromChild = message;
  }
}
