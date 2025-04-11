import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [

    { path:'',component: HomeComponent},
    {path:'index',component:IndexComponent},
    {path:'about',component: AboutComponent},
    { path:'contact',component: ContactComponent},
    {path:'profile',component:ProfileComponent,data:{name:'vishal'}},
    {path:'user/:id/:name',component:UserComponent},
    {path:"**",component:PageNotFoundComponent},
];
