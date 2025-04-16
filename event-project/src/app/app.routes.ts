import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { IndexpageComponent } from './component/indexpage/indexpage.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'index',component:IndexpageComponent},
];
