import { Component, Input, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message:string ="";
  @Output() childevent: EventEmitter<string> = new EventEmitter<string>();
  
  sendToParent() {
    this.childevent.emit('Hello from App-Child!');
  }

}
