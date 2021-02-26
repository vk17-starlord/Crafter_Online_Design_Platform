import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private http: HttpClient) { }


  URL="http://localhost:3000"
  GetPosts(){
    return this.http.get(`${this.URL}/dribbble`)
  }

  AddComment(text,postId){
    return this.http.put(`${this.URL}/d_comment`,{text,postId})
  }
  DeleteComment(c_text,id){
    return this.http.put(`${this.URL}/d_uncomment`,{text:c_text,postId:id})
  }
  Post(post){
    return this.http.post(`${this.URL}/dribbble`,post)
  }

  LikePost(id){
    return this.http.put(`${this.URL}/d_like`,{postId:id})
  }
  
  DisLikePost(id){
    return this.http.put(`${this.URL}/d_unlike`,{postId:id})
  }
}
