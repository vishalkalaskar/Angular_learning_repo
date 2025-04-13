import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserService } from './service/user.service';
import { User } from '../Interface/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curd-app';

  User:User[]=[];
  tableVisiable:boolean=false;

  //create  user
  UserForm : FormGroup;
  UserFormupdate:FormGroup;
  constructor(private userservices:UserService,private fb: FormBuilder){
    this.UserForm = this.fb.group({
      name :['',[Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.UserFormupdate = this.fb.group({
      name :['',[Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  
  submitForm()
  { 
    this.userservices.CreateUser(this.UserForm.value).subscribe((data: User) => {
      console.log('User created successfully', data);
      // Reset form or navigate after success
      this.UserForm.reset();
      this.getAllUserData();

    }, error => {
      console.error('Error creating user', error);
    });
  }

  getAllUserData(){
   this.userservices.GetAllUser().subscribe((data:User[])=>
    {
        if(data)
        {
          this.tableVisiable = true; // Make sure table is visible
          this.User=data;         
          console.log(this.User);
        }
    });
  }
 
  DeleteUser(id:number){
    this.userservices.DeleteById(id).subscribe((data:User)=>
     {
        if(data.id)
        {
          console.log(data);
          this.getAllUserData();
        }
     });
   }


   selectedUser: any = {};
   showModal: boolean = false;
   isPatchMode: boolean = false;
 
   // Open Modal for Update
   UpdateUserDetails(user: any) {
     this.selectedUser = { ...user }; // clone to avoid two-way binding
     this.isPatchMode = false;
     this.showModal = true;
   }
 
   // Open Modal for PATCH
   openPatchModal(user: any) {
     this.selectedUser = { ...user };
     this.isPatchMode = true;
     this.showModal = true;
   }
 
   // Close Modal
   closeModal() {
     this.showModal = false;
     this.selectedUser = {};
   }
 
   // Full Update (PUT)
updateUser() {
  const updatedUser = this.selectedUser;

  this.userservices.UpdateUser(updatedUser.id, updatedUser).subscribe(() => {
    this.closeModal();
    this.getAllUserData();
  });
}

// Partial Update (PATCH)
patchUser() {
  const updatedUser = this.selectedUser;

  // Send only name and email in patch
  const patchData = {
    name: updatedUser.name,
    email: updatedUser.email
  };

  this.userservices.PatchUser(updatedUser.id, patchData).subscribe(() => {
    this.closeModal();
    this.getAllUserData();
  });
}

  
}
