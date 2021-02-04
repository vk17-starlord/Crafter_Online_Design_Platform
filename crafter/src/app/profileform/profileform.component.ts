import { Component, OnInit } from '@angular/core';
import {ProfileUploadService} from '../services/profile-upload.service';

import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.scss']
})

export class ProfileformComponent implements OnInit {

  constructor(private router:Router, private _snackBar: MatSnackBar,private profileupload:ProfileUploadService) { }


  ngOnInit(): void {
  }
 

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
show:any=true;
  onCoverchange(ev){
    this.selectedCover = ev.target.files[0];
    let type:string=this.selectedCover.type.toLocaleString();
     console.log(type);
    if(type.includes('image/jpeg')||type.includes('image/webp') || type.includes('image/svg+xml')|| type.includes('image/png') || type.includes('image/jpg') || type.includes('image/svg')){
     this.show=false;
   }else{
     this.show=true;
     this._snackBar.open("Please Choose jpeg/png/svg/jpg file format", 'X',{
       duration: 2000
     });
    }

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
this.UploadCover()
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
  var file:File = this.selectedCover; 
  var myReader:FileReader = new FileReader();
  myReader.readAsDataURL(file); 
  myReader.onload=()=>{
    console.log(myReader.result)
  let p_coverPhoto=myReader.result;
  console.log(p_coverPhoto);
  this.profileupload.PostProfile(this.bio,this.desc,p_coverPhoto,this.p_contact,this.p_links).subscribe((res)=>{
    let response:any = res
    this._snackBar.open(response.msg, 'X',{
      duration: 2000
    });
    this.router.navigateByUrl('/homepage');
  },(err)=>{
    this._snackBar.open("Sorry!! We had Problem Posting Your Profile", 'X',{
      duration: 2000
    });

  });
  }

}



  
  



}
