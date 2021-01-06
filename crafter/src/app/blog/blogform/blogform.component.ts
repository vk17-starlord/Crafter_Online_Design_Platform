import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from  '@angular/fire/storage';
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
  constructor(private AF:AngularFireStorage,private router: Router,private _snackBar: MatSnackBar,private blogService:BlogService) { }
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
   
  ngOnInit(): void {

  }
   currentFilename: any=false;
  selectedFile:any=''
  onchange(ev){
    this.selectedFile = ev.target.files[0];
    console.log(this.selectedFile.name)
    this.currentFilename=this.selectedFile.name;
   }

  onSectionUpload(){
    let userId=localStorage.getItem('id');
   var filepath=`BlogImage/${userId}/BlogCover${this.b_title}`;
   const fileRef=this.AF.ref(filepath)

   this.AF.upload(filepath,this.selectedFile).then((res)=>{
    
     fileRef.getDownloadURL().subscribe((url)=>{
   this.b_coverPhoto=url;
console.log(this.b_coverPhoto)
this.nextForm=true;
this.firstForm=false;
    } ,(err)=>{
      console.log(err,'this is err')
    })
   }).catch(err => console.log(err))
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
     this.CurrentImagename=this.selectedFileimage.name; 
     console.log(this.CurrentImagename,'err');
  }


  onSectionImageUpload(){
    let userId=localStorage.getItem('id');
   var filepath=`BlogSectionImage/${userId}/${this.b_title}/${this.CurrentHeading}`;
   const fileRef=this.AF.ref(filepath)
   this.AF.upload(filepath,this.selectedFileimage).then((res)=>{
     fileRef.getDownloadURL().subscribe((url)=>{
   this.CurrentImage=url;
console.log(this.CurrentImage)
this.b_body.push( {
  heading:this.CurrentHeading,
  para:this.CurrentPara,
  image:this.CurrentImage
 }

 )
 
 this.CurrentHeading ="";
 this.CurrentPara ={
   text:""
 };

let Blog={
  b_title:this.b_title ,
  b_coverPhoto:this.b_coverPhoto ,
  b_desc:this.b_desc ,
  b_body:this.b_body,

  b_post: '..',
 b_category: this.b_category,
}
this.Blog=Blog;
console.log(Blog)
this.selectedFileimage=null;
this.CurrentImage=null;
} ,(err)=>{
      console.log(err,'this is err')
    })
   }).catch(err => console.log(err))
  }

 
  PostBlog(){
  this.blogService.PostBlogs(this.Blog).subscribe((res)=>{
    console.log('res',res)
    this._snackBar.open('Wooh!! Your Blog was successfully posted', 'X',{
      duration: 2000
    });
    this.router.navigateByUrl('/blog')
  },(err)=>{console.log(err)})  
  }
  
Error:any=false;
   
  AddSection(){
    if(this.CurrentPara==null){
      this._snackBar.open('Please Enter Your Section Details', 'X',{
        duration: 2000
      });
    }
let paragraphArray =this.CurrentPara.split('\n')
this.CurrentPara=paragraphArray.map((para)=>{
  return {text:para};
})

if(this.CurrentImage!=null ){
  this.onSectionImageUpload()
}else{
  this.b_body.push( {
    heading:this.CurrentHeading,
    para:this.CurrentPara,
    image:""
   })
  console.log(this.b_body)
}

console.log(this.b_body)
let Blog={
  b_title:this.b_title ,
  b_coverPhoto:this.b_coverPhoto ,
  b_desc:this.b_desc ,
  b_body:this.b_body,

  b_post: '..',
 b_category: this.b_category,
}
this.Blog=Blog;
this.CurrentHeading=""; 
this.CurrentPara ="";
  }
}
