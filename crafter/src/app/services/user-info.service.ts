import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {


  constructor(private http:HttpClient) { }
  apiURL="http://localhost:3000";


  GetUserInfo(){
 return this.http.get(this.apiURL+"/getUser")
  }
  getSize(file){
console.log(file)
  }
  getMemeType(type){
    let Types= ['image/gif','image/png','image/svg+xml','image/svg','image/webp','image/jpeg','image/png'];
 return Types.includes(type);
  }
}
