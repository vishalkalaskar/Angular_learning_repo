import { Component, ConstructorProvider } from '@angular/core';
import { ReactiveFormsModule ,Validators,FormBuilder,FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  //styleUrl: './login.component.css'
  styleUrls: ['./login.component.css'] // ✅ FIXED
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