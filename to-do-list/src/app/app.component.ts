import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
  task="";
  taskList:{id:number,task:string}[]=[];


  addTask()
  {
     this.taskList.push({id:this.taskList.length+1,task:this.task});
     console.log(this.taskList);
  }

  Delete(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }
}
