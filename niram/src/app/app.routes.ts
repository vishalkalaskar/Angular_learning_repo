import { Routes } from '@angular/router';
import { authGuard} from './auth.guard';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

export const routes: Routes = [

    {path:'',component: LoginpageComponent},
    {path:'index',component: AppComponent,canActivate:[authGuard]}
];
