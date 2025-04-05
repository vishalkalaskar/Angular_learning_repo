import { HttpClient } from '@angular/common/http';
import { Component,OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserserviceService} from './services/userservice.service';
import { CommonModule } from '@angular/common'; // ✅ Import this
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
}
