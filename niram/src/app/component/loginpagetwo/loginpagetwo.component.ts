import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';  // add RouterModule here

@Component({
  standalone: true,
  selector: 'app-loginpagetwo',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],  // add RouterModule here
  templateUrl: './loginpagetwo.component.html',
  styleUrls: ['./loginpagetwo.component.css']  // fixed to plural
})
export class LoginpagetwoComponent {
  form: FormGroup;
  loginError = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.form.value.username === 'admin' && this.form.value.password === '1234') {
      localStorage.setItem('loggedIn', 'true');
      this.loginError = false;
      console.log('Login successful');
      this.router.navigate(['/index']);
    } else {
      this.loginError = true;
      console.log('Invalid credentials');
      localStorage.removeItem('loggedIn');
      this.router.navigate(['']);
    }
  }
}