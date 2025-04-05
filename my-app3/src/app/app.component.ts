import { HttpClient } from '@angular/common/http';
import { Component,OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserserviceService} from './services/userservice.service';
import { CommonModule } from '@angular/common'; // ✅ Import this
import { EmailValidator } from '@angular/forms';
import { validateHeaderName } from 'http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-app3';

  User: any[] = [];

  constructor(private uservice: UserserviceService) {}

  ngOnInit(): void {
    this.uservice.getUsers().subscribe(data => {
      this.User = data;
      // ✅ Show API response in alert
      //alert(JSON.stringify(this.employees));
     // console.log(this.User);
    });
  }

  //click Event
  clickEvent(event:any)
  {
      console.log("function call",event.type);
      console.log("function called",(event.target as Element).classList);  //className;
      console.log("function ",event.target);
  }

  inputEvent(event: Event): void {
  const target = event.target as HTMLInputElement;
  console.log("Input value:", target.value);
}

vari="";
getVariable(even:Event)
{ 
   const value = even.target as HTMLInputElement;
   console.log("get variable",value.value);
   this.vari=value.value;
  
}
 displayname="";

 getvalueb()
 {
   this.displayname=this.vari;
 }

 setName()
 {
   this.vari="sam";
 }

 mail="";
 getEmail(val:string)
 {
        console.log(val);
        this.mail=val;
 }
 setMail() {
  this.mail="defaul@gmail.com";
  console.log("Email set to:", this.mail);
}
}
