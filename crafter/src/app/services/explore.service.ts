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
}
