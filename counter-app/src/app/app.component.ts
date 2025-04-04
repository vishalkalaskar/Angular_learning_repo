import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app';
 /* count=0;
  handleIncounter()
  {
    this.count=this.count+1;
  }
  handleDecrese()
  {
    this.count=this.count-1;
  }
  handleReset()
  {
    this.count=0;
  } */
  count=0;
  handleWithpar(val:string)
  {
    if(val=='minus')
    {
      if(this.count>0)
      {
         this.count=this.count-1;
      }
      else
      {
          alert("count is zero");
      }

    }
    else if(val=='reset')
    {
      this.count=0;
    }
    else if(val=='plus')
    {
      this.count=this.count+1;
    }
  }
}
