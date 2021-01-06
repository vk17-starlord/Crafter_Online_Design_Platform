import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import {ProfileUploadService}  from '../services/profile-upload.service'
import {AuthenticationService} from '../services/authentication.service'
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  CurrentUser:any=''; 
  FeaturedBlogs:any=[]
  constructor(private authentication:AuthenticationService,private _snackBar: MatSnackBar,private Profile:    ProfileUploadService  ,private blogService:BlogService  ) { }

  ngOnInit(): void {
    this.Profile.GetUser().subscribe((res)=>{
   
      this.CurrentUser=res[0];
      console.log(this.CurrentUser)
    })
   this.blogService.getallBlogs().subscribe((res)=>{
    let Blogs:any=[];
    Blogs=res;
        this.FeaturedBlogs=Blogs.filter((blog)=>{
               if(blog.featured){
                 return blog;
               }
                    

        })
        console.log(this.FeaturedBlogs,'blogs')
  })
  }
  onlogout(){
    this.authentication.logout();
    this._snackBar.open('logout successfull', 'X',{
     duration: 2000
   });
  }
}
