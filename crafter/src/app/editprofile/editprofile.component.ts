import { Component, OnInit } from '@angular/core';
import {ProfileUploadService} from '../services/profile-upload.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  constructor(private router: Router,private _snackBar: MatSnackBar,private profileupload:ProfileUploadService) { }
  spin=false;
  bio:any=null
	desc:any=null
    p_coverPhoto:any=null;
     p_contact:any=null;
  
    facebook={
      link_type:"facebook",
       link_url:null
   }
   instagram={
    link_type:"instagram",
    link_url:null
 }
 behance={
  link_type:"behance",
  link_url:null
}
website={
  link_type:"website",
  link_url:null
}
pinterest={
  link_type:"pinterest",
  link_url:null
}
p_links:any="";

selectedCover:any=""



  ngOnInit(): void {
  }
  show=true;

  onCoverchange(ev){
    this.selectedCover = ev.target.files[0];
    let type:string=this.selectedCover.type.toLocaleString();
  
    if(type.includes('image/jpeg') || type.includes('image/png') || type.includes('image/jpg') || type.includes('image/svg')){
     this.show=false;

   }else{
     this.show=true;
     this._snackBar.open("Please Choose jpeg/png/svg/jpg file format", 'X',{
       duration: 2000
     });
    }

 console.log(this.selectedCover);
 
  }

  Upload(){
    let Feilds=[this.bio,this.desc,this.p_coverPhoto,this.p_contact]
    let p_links =[this.facebook,this.instagram,this.website,this.pinterest,this.behance]
    
    p_links=p_links.filter((ele)=>{
      if( ele.link_url!=null){
         if(ele.link_url!=""){
          return ele;
         }
      }
    })
    
    const result=Feilds.every((ele)=>{

     return ele!==null && ele!="";

    })
    
    if(result){
     if(p_links.length>0){
   this.p_links=p_links;
   this.spin=true;
   this.UploadCover();
     }else{
      this._snackBar.open("Please Enter All The Feilds", 'X',{
        duration: 2000
      });
  
     }
    }else{
      this._snackBar.open("Please Enter All The Feilds", 'X',{
              duration: 2000
            });
    }

  }

  UploadCover(){
 
    let userId=localStorage.getItem('id');
    var file:File = this.selectedCover; 
    var myReader:FileReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onload=()=>{
      let p_coverPhoto=myReader.result;
    this.profileupload.UpdateProfilePost(userId,this.bio,this.desc,p_coverPhoto,this.p_contact,this.p_links)
    .subscribe((res)=>{
      this._snackBar.open("Profile Updated Successfully!!", 'X',{
        duration: 2000
      });
      this.router.navigateByUrl('/homepage')
    })
    ;
    }
  

    
  }
}
