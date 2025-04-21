import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { IndexHtmlComponent } from './component/index.html/index.html.component';
import { authGuard} from './auth.guard';
import { AllcourcesComponent } from './component/allcources/allcources.component';
import { TranineregistrationComponent } from './component/tranineregistration/tranineregistration.component';
import { ContactuseComponent } from './component/contactuse/contactuse.component';
import { UpcomingbatchComponent } from './component/upcomingbatch/upcomingbatch.component';
import { PagenotFountComponent } from './component/pagenot-fount/pagenot-fount.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'index',component:AppComponent,canActivate: [authGuard],
        children:[
            {path:'trainer',loadComponent:()=>import('./component/tranineregistration/tranineregistration.component').then((c)=>c.TranineregistrationComponent)},
    {path:'contactus',loadComponent:()=>import('./component/contactuse/contactuse.component').then((c)=>c.ContactuseComponent)},
    {path:'upcomingbatch',loadComponent:()=>import('./component/upcomingbatch/upcomingbatch.component').then((c)=>c.UpcomingbatchComponent)}
        ]
    },
   // {path:'Allcourses',component:AllcourcesComponent},
   // {path:'trainer',component:TranineregistrationComponent},
   // {path:'contactus',component:ContactuseComponent},
   // {path:'upcomingbatch',component:UpcomingbatchComponent}

    //{path:'index',loadComponent:()=>import('./component/index.html/index.html.component').then((c)=>c.IndexHtmlComponent)},
   // {path:'Allcourses',loadComponent:()=>import('./component/allcources/allcources.component').then((c)=>c.AllcourcesComponent)},
    // {path:'trainer',loadComponent:()=>import('./component/tranineregistration/tranineregistration.component').then((c)=>c.TranineregistrationComponent)},
    // {path:'contactus',loadComponent:()=>import('./component/contactuse/contactuse.component').then((c)=>c.ContactuseComponent)},
    // {path:'upcomingbatch',loadComponent:()=>import('./component/upcomingbatch/upcomingbatch.component').then((c)=>c.UpcomingbatchComponent)},
    {path:'**',component:PagenotFountComponent}
];
