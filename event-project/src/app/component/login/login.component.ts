import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { IndexpageComponent } from '../indexpage/indexpage.component';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,IndexpageComponent],
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
      // Navigate to the 'index' route
      console.log(this.form.value);
      this.router.navigate(['/index']);
    } else {
      alert('Invalid credentials');
    }
  }
}
