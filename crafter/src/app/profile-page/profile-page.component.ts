import { Component, OnInit,Inject } from '@angular/core';
import {ProfileUploadService } from '../services/profile-upload.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfileformComponent } from '../profileform/profileform.component';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private blogService:BlogService,private profileService: ProfileUploadService,private dialog:MatDialog) { }

  UserInfo:any='';

  
  profilepic: string;
   bio: string;
   desc:string;
   BlogPosts:any;

  ngOnInit(): void {
 this.GetUser()

  }

  GetUser(){
    this.profileService.GetUser().subscribe((user)=>{
      
      this.UserInfo=user[0];

      this.blogService.getUserBlog(this.UserInfo._id).subscribe((res)=>{
        
        this.BlogPosts=res;
         console.log(this.BlogPosts)
      })
    });    
  }

  openForm(){
  const dialogRef = this.dialog.open(ProfileformComponent,{width: '500px', height: '450px'})
  dialogRef.afterClosed().subscribe(result => {
this.GetUser()   
  });
  }



}


