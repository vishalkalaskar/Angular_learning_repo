import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { CommonModule } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { signal,effect,Signal,computed} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-style-css';
  display=true;

  tdiv = true;

  funhid(){
    this.display=!this.display;
  }

  togllefun()
  {
    this.tdiv=!this.tdiv;
  }
  
  color:number=2;
  
   togalfun(val:number)
   {
     this.color=val;
   }

   inputvalue(event:Event)
   {
     const input=event.target as HTMLInputElement;
     console.log("color",input.value);
     this.color=Number(input.value);
   }

   switchcolor='red';

   HandleswitchColor(val:string)
   {
      this.switchcolor=val;
   }
   
   switchinput(event:Event)
   {
     const swithv = event.target as HTMLInputElement;
     console.log(swithv.value);
     this.switchcolor=swithv.value;
   }

   Users=['anil','sam','Peter','braon','tony'];
   Students = [
    {'id':1,"name":'sam','lastName':'rain'},
    {'id':2,"name":'joy','lastName':'peter'},
    {'id':3,"name":'jay','lastName':'jecokb'},
    {'id':4,"name":'ammi','lastName':'samule'},
    {'id':5,"name":'karan','lastName':'coco'},
    {'id':6,"name":'gaa','lastName':'butter'},
    {'id':7,"name":'sasa','lastName':'pije'},
   ]
  
   getName(val:string)
   {
      alert(val);
   }
  
    counter = signal(0);

    constructor() {
      effect(() => {
        console.log('Counter changed to:', this.counter());
      });
    }

    increment()
    {
      
        this.counter.update((value:number) => value+1);
      
    }
    decrement()
    {
      if(this.counter()>0)
        {
         this.counter.update((value:number) => value-1);
        }
    }
    reset()
    {
       this.counter.set(0);
    }

  data = signal<number | string>(10); 
  update()
  {
    this.data.set('value');
  }

  count: Signal<number> = computed(() => 200);

  x=signal(10);
  y=signal(20);
  z=computed(()=>this.x()+this.y());
  
  showSum()
  {
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }

  //two way binding
  bind ="";
  show=true;
  ifhide()
  {
    this.show=!this.show;
  }
  loggintrue = false;

loging() {
  this.loggintrue = !this.loggintrue;
}
}

