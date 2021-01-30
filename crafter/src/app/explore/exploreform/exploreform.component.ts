import { Component, OnInit ,Inject} from '@angular/core';
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserInfoService } from 'src/app/services/user-info.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UploadpostComponent} from '../uploadpost/uploadpost.component';
@Component({
  selector: 'app-exploreform',
  templateUrl: './exploreform.component.html',
  styleUrls: ['./exploreform.component.scss']
})
export class ExploreformComponent implements OnInit {
  Loader:boolean = false;
  Preview:boolean =false;
  Form:boolean = true;
  Category:any=[
    "other",
    "web design",
    "mobile design",
    "illustration",
    "Typography"
  ]
CurrentPost:any={
  d_title:" Daily UI: Event Dark Mode",
  d_pic:"https://cdn.dribbble.com/users/1253590/screenshots/5564073/event_dark_mode_4x.png?compress=1&resize=1000x750",
  d_desc:`Welcome to Daily UI Challenge for 100 days straight.

  This is day 023: Event Dark Mode
  
  See you tomorrow!`,
  d_category:"web design",
  d_color:['#000000','#14213d','#fca311','#e5e5e5'],
  d_tags:['dashboard','dark','clean','clear','ui','ux'],
  d_link:['https://www.wfonts.com/font/futura']
}
  d_title:any=null;
   d_pic:any=null;
   d_desc:any=null;
   d_category:any=null;
   d_color:string[]=[];
   d_tags: string[] = ["#UI/UX", "#Design"];
   d_link:string[]=[];
selectedImage:any=null;
CurrentUser:any=null;
  constructor(public dialog: MatDialog,private userService: UserInfoService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userService.GetUserInfo().subscribe((res)=>{
      console.log(res[0])
      this.CurrentUser=res[0];
    })
  }


  chipInputKeyCodes = [ENTER, COMMA]; 
   remove(hashtag: string): void {
    const index = this.d_tags.indexOf(hashtag);
    if (index >= 0) {
      this.d_tags.splice(index, 1);
    }
  } 
  removeLink(link: string): void {
    const index = this.d_link.indexOf(link);
    if (index >= 0) {
      this.d_link.splice(index, 1);
    }
  } 
  removeColor(color: string): void {
    const index = this.d_color.indexOf(color);
    if (index >= 0) {
      this.d_color.splice(index, 1);
    }
  } 
  addColor(event: MatChipInputEvent): void {
    const chipInputCtrl = event.input;
    var pattern = new RegExp("^#([a-fA-F0-9]){3}$|[a-fA-F0-9]{6}$")

    if( pattern.test(chipInputCtrl.value)){

      let value = event.value;    if ((value || "").trim()) {
        value = value.trim();
        if (value.substr(0, 1) != "#") value = "#" + value;     
         this.d_color.push(value.trim());
      }  
      chipInputCtrl.value = "";
  
    }else{
 this._snackBar.open('Invalid Hex Color Code','x',{
   duration:1000,
 })
 chipInputCtrl.value = "";
    }

  }

  add(event: MatChipInputEvent): void {
    const chipInputCtrl = event.input;
    let value = event.value;    if ((value || "").trim()) {
      value = value.trim();
      if (value.substr(0, 1) != "#") value = "#" + value;      this.d_tags.push(value.trim());
    }    chipInputCtrl.value = "";
    console.log(this.d_tags)
  }


  addLink(event: MatChipInputEvent): void {
    const chipInputCtrl = event.input;
    let value = event.value;   

    if(this.urlValidator(value)) {
      if ((value || "").trim()) {
        value = value.trim();
        if (value.substr(0, 1) != "#") value = "#" + value;   
       this.d_link.push(value.trim());
      }    chipInputCtrl.value = "";
      console.log(this.d_link)
    }else{
      this._snackBar.open('Please Enter Valid URL','x',{
        duration:1000
      })
    }
  }

  UploadPost(){

    if(this.d_title=="" || this.d_title==null || this.d_category=="" || this.d_category===null||this.d_desc=="" || this.d_color.length===0 || this.d_link.length===0 || this.d_tags.length===0 ){
this._snackBar.open('Please Fill All The Feilds','x',{
  duration:1000
})
    }
    else{
this.Form=false;
this.Loader=true;
this.CurrentPost={
 d_tags:this.d_tags,
 d_title:this.d_title,
d_link:this.d_link,
d_color:this.d_color,
d_pic:this.d_pic,
d_category:this.d_category,
d_desc:this.d_desc,
}
setTimeout(() => {
  this.Loader=false;
this.Preview=true;
}, 5000);


    }

  }


  urlValidator(url){
    var expression =  
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi; 
    var regex = new RegExp(expression); 
    if (url.match(regex)) { 
     return true;
  } else { 
    return false;
  } 
  }

OnImageChange(ev){
  this.selectedImage = ev.target.files[0];
  let type:string=this.selectedImage.type.toLocaleString();

  if(type.includes('image/jpeg') || type.includes('image/png') || type.includes('image/jpg') || type.includes('image/svg')){
this.SetImage();   
 }else{
   this._snackBar.open("Please Choose jpeg/png/svg/jpg file format", 'X',{
     duration: 2000
   });
}
}

SetImage(){
  var file:File = this.selectedImage; 
  var myReader:FileReader = new FileReader();
  myReader.readAsDataURL(file);
  myReader.onload=()=>{
this.d_pic=myReader.result;
console.log(this.d_pic)
this._snackBar.open("Image Added Successfully", 'X',{
  duration: 2000
});
  }   
}

openDialog(){
  const dialogRef = this.dialog.open(UploadpostComponent, {
    width: '400px',
    height:'240px',
    
    data: {post:this.CurrentPost}
  });
}

}

