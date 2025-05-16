import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { LoginpageComponent } from './app/loginpage/loginpage.component';

const bootstrap = () => bootstrapApplication(LoginpageComponent, config);

export default bootstrap;
