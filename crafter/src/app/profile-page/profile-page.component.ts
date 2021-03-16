import { Component, OnInit,Inject } from '@angular/core';
import {ProfileUploadService } from '../services/profile-upload.service'
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BlogService } from '../services/blog.service';
import { Params, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {UserInfoService} from '../services/user-info.service'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private snack:MatSnackBar, private UserInfo:UserInfoService,private _bottomSheet: MatBottomSheet,private route: ActivatedRoute,private blogService:BlogService,private profileService: ProfileUploadService) { }
 Edit=false;
 Upload=false;
 myProfile=false;

  profileUser:any={
    user:"",
    blog:"",
    dribbble:"",
    profile:""
  };

  openBottomSheet(): void {

    if(this.Viewer===this.profileUser.user._id){
      this._bottomSheet.open(ProfilePicComponent);

    }else{
          this.snack.open("You cannot update this profile picture", 'X',{
            duration: 2000
          });
    }
  }

  openprofileform(): void {


  }



customOptions: OwlOptions = {
  loop:false,
  margin:10,
  responsive:{
      0:{
          items:1,
                  },
      500:{
          items:3,
        
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

 Viewer:any=""

  ngOnInit(): void {

 

let id=this.route.snapshot.params['id'].toString();
this.profileService.GetProfilePostById(id).subscribe((res)=>{
  this.profileUser=res;

  

this.profileUser.blog.forEach((blog) => {
  let txt=blog.b_body[0].para[0].text
  blog.b_body[0].para[0].text=txt.slice(0,120).concat('...');
})

if(this.profileUser.profile.length<1){
  console.log(this.profileUser.profile)
  this.profileUser.profile.p_coverPhoto="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
}

console.log(this.profileUser.dribbble)


if(this.profileUser.profile.length>0){
this.profileUser.profile=this.profileUser.profile[0];
this.Upload=false;
this.Edit=true;
}else{
  this.Upload=true;
  this.Edit=false;
}

})
this.UserInfo.GetUserInfo().subscribe((resp)=>{
  this.Viewer=resp[0]._id;

 

})
  }

 

 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.profileUser.dribbble, event.previousIndex, event.currentIndex);
  }

openProfile(){
  if(this.Viewer===this.profileUser.user._id){
           this.myProfile=true;
  }else{
        this.snack.open("You cannot update this profile picture", 'X',{
          duration: 2000
        });
  }
}

}


