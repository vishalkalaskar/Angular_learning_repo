import { Component } from '@angular/core';
import { Router,ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet,RouterLink,AppComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userName:string|null='';
  userId: string | null = null;
  userN: string | null = null;


constructor(private route:ActivatedRoute,private router: Router){}
 ngOnInit(){
   let name = this.route.snapshot.paramMap.get('name');
   console.log(name);
   this.userName=name;

   this.route.queryParamMap.subscribe(params=>{
    this.userId = params.get('id');
    this.userN = params.get('name');
   })

 }

 
}
