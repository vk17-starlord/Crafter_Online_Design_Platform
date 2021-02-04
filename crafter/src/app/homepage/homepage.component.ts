import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import {ProfileUploadService}  from '../services/profile-upload.service'
import {AuthenticationService} from '../services/authentication.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import { S } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  CurrentUser:any=''; 
 RecentBlogs:any=[]
  constructor(private authentication:AuthenticationService,private _snackBar: MatSnackBar,private Profile:    ProfileUploadService  ,private blogService:BlogService  ) { }

  ngOnInit(): void {
    this.Profile.GetUser().subscribe((res)=>{
   
      this.CurrentUser=res[0];
    })
   this.blogService.getallBlogs().subscribe((res)=>{
    let Blogs:any=[];
    Blogs=res;


    let Sorted=Blogs.sort((val1, val2)=>
     {return new Date(val2.createdAt).getTime() - new 
      Date(val1.createdAt).getTime()}
      )

      if(Sorted.length<4){
               this.RecentBlogs=Sorted.slice(0,Sorted.length)
      }else{
             this.RecentBlogs=Sorted.slice(0,4);
      }
      console.log(this.RecentBlogs)
  })

  }
  onlogout(){
    this.authentication.logout();
    this._snackBar.open('logout successfull', 'X',{
     duration: 2000
   });
  }
}
