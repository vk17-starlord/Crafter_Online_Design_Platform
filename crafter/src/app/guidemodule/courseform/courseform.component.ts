import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/services/guide.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.scss']
})
export class CourseformComponent implements OnInit {
 
  
  selectedImage:any="";

  data={
    title:null,
    cover_photo:null, 
    link:null, 
    description:null,
    category:"course"
  }
  constructor(private _bottomSheet: MatBottomSheet,private snackBar: MatSnackBar,private guide:GuideService,private userservice :UserInfoService  ) { }

  ngOnInit(): void {
  }
 
  OnImageChange(ev){
    this.selectedImage = ev.target.files[0];

    let type:string=this.selectedImage.type.toLocaleString();
  
    if(this.userservice.getMemeType(type)){
  this.UploadImage();   
   }else{
     this.snackBar.open("Please Choose jpeg/png/svg/jpg file format", 'X',{
       duration: 2000
     });
  }
  }

  UploadImage(){
    
    var file:File = this.selectedImage; 
    var myReader:FileReader = new FileReader();

    myReader.readAsDataURL(file);
    myReader.onload=()=>{
 this.data.cover_photo=myReader.result;
  console.log(this.data.cover_photo)
} 
  }

  submitForm(){
    console.log(this.data,'data')
    this.guide.PostGuide(this.data).subscribe((res)=>{
      console.log(res)
      this.snackBar.open("Course Posted Successfully!!", 'X',{
        duration: 2000
      });
      this._bottomSheet.dismiss();

    },(err)=>{
      console.log(err)
    })

  }


}

