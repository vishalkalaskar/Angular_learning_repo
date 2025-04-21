import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UpcomingbatchComponent } from '../upcomingbatch/upcomingbatch.component';
import { ContactuseComponent } from '../contactuse/contactuse.component';
import { TranineregistrationComponent } from '../tranineregistration/tranineregistration.component';
import { AllcourcesComponent } from '../allcources/allcources.component';

@Component({
  selector: 'app-index.html',
  imports: [RouterLink,RouterLinkActive,RouterOutlet,UpcomingbatchComponent,ContactuseComponent,TranineregistrationComponent,AllcourcesComponent],
  templateUrl: './index.html.component.html',
  styleUrl: './index.html.component.css'
})
export class IndexHtmlComponent {

}
