import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app2';
  functioncall()
  {
   this.funtionTwo()
    alert("this funtion call");
  }
  funtionTwo()
  {
      alert("other function");
  }
  name:string="peter";
  UpdateName()
  {
     //this.name="";
     let x=30; //variable
     var y=50; 
     alert("name  "+ this.name+" "+x+" "+y);
  }

  sum(x:number,y:number)
  {
    alert(x+y);
  }
}
