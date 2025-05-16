import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LoginpageComponent } from './app/loginpage/loginpage.component';

bootstrapApplication(LoginpageComponent, appConfig)
  .catch((err) => console.error(err));
