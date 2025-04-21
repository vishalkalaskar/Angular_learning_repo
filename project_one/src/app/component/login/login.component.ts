import { Component, ConstructorProvider } from '@angular/core';
import { ReactiveFormsModule ,Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { IndexHtmlComponent } from '../index.html/index.html.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,IndexHtmlComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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