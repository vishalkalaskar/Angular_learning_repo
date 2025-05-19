import { Routes } from '@angular/router';
import { authGuard} from './auth.guard';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { IndexpageComponent } from './component/indexpage/indexpage.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { LoginpagetwoComponent } from './component/loginpagetwo/loginpagetwo.component';

export const routes: Routes = [

    {path:'',component: LoginpagetwoComponent},
    {path:'index',component: IndexpageComponent,canActivate:[authGuard]},
    {path:'**',component:PagenotfoundComponent}
];
