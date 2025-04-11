import { Component } from '@angular/core';
import { ActivatedRoute, PreloadAllModules, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent { 
  constructor(private router :ActivatedRoute){}
  userDetails:any={};
  ngOnInit()
  {
    this.router.params.subscribe(param=>{
      this.userDetails=param;
    })
  }
}
