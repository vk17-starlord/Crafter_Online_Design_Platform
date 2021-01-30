import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { BlogService } from 'src/app/services/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent implements OnInit {

  categories:['UI/UX','Graphic Design','Animation']
  constructor(private router: Router,private _snackBar: MatSnackBar,private blogService:BlogService) { }
 Blog:any
  b_title=null
     b_coverPhoto=null
     b_desc=null
     b_body=[
      
     ]

     b_post=null
    b_category=null


    nextForm=false;
    firstForm=true;
   BlogSchema:any={
    b_coverPhoto:"",  
    b_title:"",
     b_desc:"",
      b_body:[], 
      b_post:"..",
       b_category:""
   }
  ngOnInit(): void {

  }
  halfsubmit=true;
   currentFilename: any=false;
  selectedFile:any=''
  onchange(ev){
    this.selectedFile = ev.target.files[0];
    let type:string=this.selectedFile.type.toLocaleString();
  
    if(type.includes('image/jpeg') || type.includes('image/png') || type.includes('image/jpg') || type.includes('image/svg')){
     this.halfsubmit=false;
   
   }else{
     this.halfsubmit=true;
     this._snackBar.open("Please Choose jpeg/png/svg/jpg file format", 'X',{
       duration: 2000
     });
    }


  }

  onSectionUpload(){
    var file:File = this.selectedFile; 
    var myReader:FileReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onload=()=>{
     console.log(myReader.result)
     this.b_coverPhoto=myReader.result;
     this.BlogSchema.b_category=this.b_category;
     this.BlogSchema.b_coverPhoto=this.b_coverPhoto;
     this.BlogSchema.b_desc=this.b_desc;
     this.BlogSchema.b_title=this.b_title;
     console.log(this.BlogSchema)
     this.nextForm=true;
     this.firstForm=false;
     
     
    }

  }
 
  onRadioInput(){
    console.log(this.b_category)
  }
 

 

  SubmitHalf(){
   if(this.b_title && this.selectedFile &&this.b_desc &&this.b_category){
    this.onSectionUpload()
    
   }else{
    this._snackBar.open('Please Enter all Fields', 'X',{
      duration: 2000
    });
   }
  }

  CurrentHeading="";
  CurrentPara:any=null;
  CurrentImage=null;


CurrentImagename:any=false;
  selectedFileimage:any=''
  onsectionchange(ev){
    this.selectedFileimage = ev.target.files[0];
    this.selectedFile = ev.target.files[0];
    console.log(this.selectedFile.type)
    let type:string=this.selectedFile.type.toLocaleString();
 
    if(type.includes('image/jpeg') || type.includes('image/png') || type.includes('image/jpg') || type.includes('image/svg')){

   }else{
     this._snackBar.open("Please Choose jpeg/png/svg/jpg file format", 'X',{
       duration: 2000
     });
    }
  }


 


  PostBlog(){
console.log(this.BlogSchema)
    this.blogService.PostBlogs(this.BlogSchema).subscribe((res)=>{
    console.log('res',res)
    this._snackBar.open('Wooh!! Your Blog was successfully posted', 'X',{
      duration: 2000
    });
    this.router.navigateByUrl('/blog')
  },(err)=>{

    this._snackBar.open(err.error.error, 'X',{
      duration: 2000
    });
  })  
  }
  
Error:any=false;
   
  AddSection(){
// check if Para is Null or not
if(this.CurrentPara==="" || this.CurrentPara==null){
  this._snackBar.open('Please Enter Section Para', 'X',{
    duration: 2000
  });
}else{
  this.CurrentPara=this.CurrentPara.split('\n');
  this.CurrentPara= this.CurrentPara.filter(function (el) {
    return el != "" ;
  });
   let para= this.CurrentPara.map((ele)=>{
     return {text:ele}
   })
   let heading:any="";
   let image:any="";
  //  check for heading
   if(this.CurrentHeading!==""){
heading=this.CurrentHeading;
   }
  //  check for image 
  if(this.CurrentImage!=null){

    var file:File = this.selectedFileimage; 
    var myReader:FileReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onload=()=>{
     console.log(myReader.result);
     image=myReader.result;
     this.BlogSchema.b_body.push({heading,para,image});
     console.log(this.BlogSchema.b_body)
     this.CurrentImage="";
     this.CurrentPara='';
     this.CurrentHeading=""
     this.selectedFileimage=null;
     this.CurrentImage=null;
      console.log(this.BlogSchema.b_body,"with image")
      this._snackBar.open('Added Section Successfully', 'X',{
        duration: 500
      });
    }

  }else{
    this.BlogSchema.b_body.push({heading,para,image});
    console.log(this.BlogSchema.b_body,"without image")
    this.CurrentImage="";
    this.CurrentPara='';
    this.CurrentHeading=""
    this.selectedFileimage=null;
    this.CurrentImage=null;
    this._snackBar.open('Added Section Successfully', 'X',{
      duration: 500
    });
  }
   



  }
  }
}
