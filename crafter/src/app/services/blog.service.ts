import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  ApiUrl="http://localhost:3000/blog"  

  getallBlogs(){

return this.http.get(this.ApiUrl)

  }
   

  PostBlogs(Blog){
  return this.http.post(this.ApiUrl,{Blog})
  }

  getUserBlog(id){
    return this.http.get(`http://localhost:3000/b_user_prof/${id}`)
  }
}
