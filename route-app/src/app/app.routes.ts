import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path:'',component: HomeComponent},
    { path:'about',component: AboutComponent},
    { path:'contact',component: ContactComponent},
    {path:'profile',component:ProfileComponent},
    {path:"**",component:PageNotFoundComponent},
];
