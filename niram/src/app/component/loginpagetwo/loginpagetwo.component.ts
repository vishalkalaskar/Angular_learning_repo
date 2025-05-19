import { Component } from '@angular/core';
import { ReactiveFormsModule ,Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loginpagetwo',
  imports: [ReactiveFormsModule],
  templateUrl: './loginpagetwo.component.html',
  styleUrl: './loginpagetwo.component.css'
})
export class LoginpagetwoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  submitForm() {
    if (this.form.value.username === 'admin' && this.form.value.password === '1234') {
      localStorage.setItem('loggedIn', 'true'); // Set login flag
      console.log('Login successful');
      this.router.navigate(['/index']);
    } else {
      console.log('Invalid credentials');
      localStorage.removeItem('loggedIn');
      this.router.navigate(['']);
    }
  }
}

