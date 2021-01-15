import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';@Injectable({
  providedIn: 'root'
})
export class ProfileUploadService {

  constructor(private http: HttpClient) { }


 URL="http://localhost:3000"
  UpdateProfile(profilePic:string){
return this.http.put(`${this.URL}/updateProfilePic`,{profilePic});
  }
  
 PostProfile(bio,desc,p_coverPhoto,p_contact,p_links){
    return this.http.post(`${this.URL}/postProfileInfo`,{bio,desc,p_coverPhoto,p_contact,p_links});

  }

  GetProfile(){
    return this.http.get(`${this.URL}/getProfileInfo`)
  }

  GetUser(){
    return this.http.get(`${this.URL}/getUser`);
  }

  GetProfilePostById(id){
    return this.http.get(`${this.URL}/b_user_prof/${id}`);    
  }

  GetProfileById(id){
    return this.http.get(`${this.URL}/getUserProfile/${id}`);    
  }

  UpdateProfilePost(id,bio,desc,p_coverPhoto,p_contact,p_links){
    return this.http.put(`${this.URL}/updateProfile/${id}`,{bio,desc,p_coverPhoto,p_contact,p_links});   
  }

}
