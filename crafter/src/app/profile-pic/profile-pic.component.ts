import { Component, OnInit } from '@angular/core';
import {ProfileUploadService} from '../services/profile-upload.service';
import {AngularFireStorage} from  '@angular/fire/storage';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {

  constructor(private router:Router, private _snackBar: MatSnackBar,private profileupload:ProfileUploadService,private AF:AngularFireStorage) { }

  show:any=true;
  ProfileUrl:any=""
  
  ngOnInit(): void {
    this.profileupload.GetUser().subscribe((res)=>{
      console.log(res[0])
      this.ProfileUrl=res[0].profilePic;
    })
  }
  selectedFile:any=""
  selectedCover:any=""
    onchange(ev){
     this.selectedFile = ev.target.files[0];
     console.log(this.selectedFile.type)
     let type:string=this.selectedFile.type.toLocaleString();
  
     if(type.includes('image/jpeg') || type.includes('image/png') || type.includes('image/jpg') || type.includes('image/svg')){
      this.show=false;
 
    }else{
      this.show=true;
      this._snackBar.open("Please Choose jpeg/png/svg/jpg file format", 'X',{
        duration: 2000
      });
     }

    }
  onProfileUpload(){
    var file:File = this.selectedFile; 
    var myReader:FileReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onload=()=>{
     console.log(myReader.result)
     this.ProfileUrl=myReader.result;
     this.profileupload.UpdateProfile(this.ProfileUrl).subscribe((res)=>{
       console.log(res)
       this._snackBar.open("Profile Pic Updated Successfully!!", 'X',{
        duration: 2000
      });

      this.router.navigateByUrl('/homepage')
     }) 
    }
    myReader.onerror=()=>{
      console.log(myReader.result)
    }
    
  }
}
