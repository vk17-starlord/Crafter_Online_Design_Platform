import { Component, OnInit ,HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ExploreService} from '../../services/explore.service';
import {ProfileUploadService} from '../../services/profile-upload.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Params, ActivatedRoute } from '@angular/router';
import { UserInfoService } from 'src/app/services/user-info.service';
@Component({
  selector: 'app-exploredetail',
  templateUrl: './exploredetail.component.html',
  styleUrls: ['./exploredetail.component.scss']
})
export class ExploredetailComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;
  C_Id:any;
CurrentUser:any
  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


  customOptions: OwlOptions = {
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1,
                    },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            
            loop:false
        }
    }
  }

  customOptions2: OwlOptions = {
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1,
                    },
        600:{
            items:3,
          
        },
        1000:{
            items:3,
            
            loop:false
        }
    }
  }

  customOptions3: OwlOptions = {
    loop:true,
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
  constructor(private router:Router,private UserService: UserInfoService,private _snackBar: MatSnackBar,private Profile:ProfileUploadService,private route:ActivatedRoute,private exploreService:ExploreService) { }
  Allposts:any
  CurrentPost:any
  AuthorPosts:any;
  SamePosts:any;
  comment:any=null;
  Likes:any;
  likeColor="rgba(204, 204, 204, 0.452)"
  dislikeColor="rgba(204, 204, 204, 0.452)"
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'].toString();
    this.C_Id=id;
this.GetCurrentPost(id)
  this.getCurrentUser()
  }

  AddComment(){

if(this.comment!=="" && this.comment!==null){
this.exploreService.AddComment(this.comment, this.CurrentPost._id).subscribe((res)=>{
console.log(res)
let response:any=res;
this._snackBar.open(response.msg, 'X',{
  duration: 2000
});
this.comment=""
this.GetCurrentPost(this.C_Id);
},(err)=>{
  this._snackBar.open('Sorry We couldnt Post Your Comment', 'X',{
    duration: 2000
  });
})
}

  }

  DeleteComment(){

  }

 
copiedColor(){
  this._snackBar.open("Color Code Copied Successfully", 'X',{
    duration: 2000
  });
}
GetAuthorPosts(id)
{

  this.Profile.GetProfilePostById(id).subscribe((res) =>{
  
    let Posts:any=res;

    this.AuthorPosts=Posts.dribbble;
  })

}  

GetSimilarPosts(){
let CurrentCategory=this.CurrentPost.d_category;
let SimilarPosts:any=this.Allposts.filter((ele)=>{
return ele.d_category===CurrentCategory;
})
if(SimilarPosts.length>4){
this.SamePosts=this.getRandom(SimilarPosts,4);
}else{
this.SamePosts=SimilarPosts;
}

}

 getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

getCurrentUser(){
  this.UserService.GetUserInfo().subscribe((user)=>{

    this.CurrentUser = user[0]
    
   },(err)=>{
     console.log(err)
   })
 }

GetCurrentPost(id){
  this.exploreService.GetPosts().subscribe((res)=>{
    this.Allposts=res;     
    this.CurrentPost = this.Allposts.filter((ele)=>{
      return ele._id === id;
    })[0];

console.log(this.CurrentPost);
this.Likes=this.CurrentPost.d_likes.length;
// liked post check
let likesarray=this.CurrentPost.d_likes;
  
const present=likesarray.some((like)=>{
 return like.postedBy._id===this.CurrentUser._id
}) 

if(present){
  this.likeColor="#fff";
  this.dislikeColor="rgba(204, 204, 204, 0.452)"
}else{
  this.likeColor="rgba(204, 204, 204, 0.452)";
  this.dislikeColor="rgba(204, 204, 204, 0.452)"
}

console.log(present,'present')
    this.GetAuthorPosts(this.CurrentPost.postedBy._id.toString())
   this.GetSimilarPosts()
    let year,month,dt
    var date = new Date(this.CurrentPost.createdAt);
    year = date.getFullYear();
month = date.getMonth()+1;
dt = date.getDate();

if (dt < 10) {
dt = '0' + dt;
}
if (month < 10) {
month = '0' + month;
}

this.CurrentPost.createdAt =year+'-' + month + '-'+dt;
  })
  this.gotoTop()
}


LikePost(){
  let likesarray=this.CurrentPost.d_likes;
  
  const present=likesarray.some((like)=>{
   return like.postedBy._id===this.CurrentUser._id
  }) 
  console.log(present)
  if(present){
    console.log('present')
    this._snackBar.open("You Have Already Liked This Post", 'X',{
      duration: 1000
    });

  }else{
    this.exploreService.LikePost(this.CurrentPost._id).subscribe((data) =>{
      console.log(data)
      this.likeColor="#fff",
      this.dislikeColor="rgba(204, 204, 204, 0.452)";
      this.GetCurrentPost(this.C_Id)
    });
  }

}

DisLikePost(){
  let likesarray=this.CurrentPost.d_likes;
  
  const present=likesarray.some((like)=>{
   return like.postedBy._id===this.CurrentUser._id
  }) 
  console.log(present)
  if(present){
    this.exploreService.DisLikePost(this.CurrentPost._id).subscribe((data) =>{
      console.log(data)
      this.likeColor="rgba(204, 204, 204, 0.452)"
      this.dislikeColor="#fff";
      this.GetCurrentPost(this.C_Id)
    });
  }else{

  }
}

ChangeRoute(id){
  this.router.navigate(['/Exploredetail', id])
  this.GetCurrentPost(id);
  let likesarray=this.CurrentPost.d_likes;  
}
}
