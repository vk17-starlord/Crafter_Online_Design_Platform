import { Component, OnInit } from '@angular/core';
import {ProfileUploadService} from '../services/profile-upload.service';
import {AngularFireStorage} from  '@angular/fire/storage';
@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.scss']
})

export class ProfileformComponent implements OnInit {

  constructor(private profileupload:ProfileUploadService,private AF:AngularFireStorage) { }

  ngOnInit(): void {
  }

   
   Profileurl=``
selectedFile
  onchange(ev){
   this.selectedFile = ev.target.files[0];
 

  }


  onProfileUpload(){
    let userId=localStorage.getItem('id');
   var filepath=`ProfileImage/${userId}/profilepic_${this.selectedFile.name}`;
   const fileRef=this.AF.ref(filepath)

   this.AF.upload(filepath,this.selectedFile).then((res)=>{
     console.log(res)
     fileRef.getDownloadURL().subscribe((url)=>{
      console.log(url);
    })
   
   })

  }



}
