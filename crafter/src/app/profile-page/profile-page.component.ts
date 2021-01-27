import { Component, OnInit,Inject } from '@angular/core';
import {ProfileUploadService } from '../services/profile-upload.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BlogService } from '../services/blog.service';
import { Params, ActivatedRoute } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private blogService:BlogService,private profileService: ProfileUploadService,private dialog:MatDialog) { }
 Edit=false;
 Upload=false;
 BlogDiv=false;
 DribbleDiv=false;

  profileUser:any={
    user:"",
    blog:"",
    dribbble:"",
    profile:""
  };


EmptyDiv=false;
EmptyDivBlog=false;



customOptions: OwlOptions = {
  loop:false,
  margin:10,
  responsive:{
      0:{
          items:1,
                  },
      500:{
          items:2,
        
      },
      1000:{
          items:3,
          
          loop:false
      }
  }
}

customOptions2: OwlOptions = {
  loop:false,
  margin:10,
  responsive:{
      0:{
          items:1,
                  },
      500:{
          items:2,
        
      },
      1000:{
          items:3,
          
          loop:false
      }
  }
}



  ngOnInit(): void {

let id=this.route.snapshot.params['id'].toString();
this.profileService.GetProfilePostById(id).subscribe((res)=>{
  this.profileUser=res;
console.log(res)


  if(this.profileUser.blog.length>0){
this.BlogDiv=true;
  this.EmptyDivBlog=false;  
}
else{
  this.EmptyDivBlog=true;  
}

if(this.profileUser.dribbble.length>0){
  this.EmptyDiv=false;
  this.DribbleDiv=true;
}else{
  this.EmptyDiv=true;
}


if(this.profileUser.profile.length>0){
this.profileUser.profile=this.profileUser.profile[0];
this.Upload=false;
this.Edit=true;
}else{
  this.Upload=true;
  this.Edit=false;
}



})
  }

  openDialog() {
    this.dialog.open(AboutMeComponent,{width:'65%',height:"75vh", data: {
      Profile: this.profileUser.user,
    }    
  });
  }

  openProfile()
{
  this.dialog.open(ProfilePicComponent,{width:'65%',height:"75vh", data: {
    Profile: this.profileUser.user,
           
  }    
});

}



}


