import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Interface/User';
import { response } from 'express';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  //User:User[]=[];
  constructor(private http:HttpClient) { }
  url="http://localhost:3000/users";

  GetAllUser():Observable<User[]>
  {
    return this.http.get<User[]>(this.url);
  }

  DeleteById(id:number):Observable<User>
  {
   //return this.http.delete<User>(this.url+'/${id}');
   return this.http.delete<User>(`${this.url}/${id}`);
  }

  CreateUser(User:User):Observable<User>
  {
   //return this.http.delete<User>(this.url+'/${id}');
   return this.http.post<User>(this.url,User);
  }

  UpdateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${id}`, user);
  }
  
  PatchUser(id: number, partialUser: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.url}/${id}`, partialUser);
  }
}
