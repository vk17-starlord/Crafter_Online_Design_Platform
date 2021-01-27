import { Component, OnInit ,HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ExploreService} from '../../services/explore.service';
import {ProfileUploadService} from '../../services/profile-upload.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-exploredetail',
  templateUrl: './exploredetail.component.html',
  styleUrls: ['./exploredetail.component.scss']
})
export class ExploredetailComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
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
  constructor(private _snackBar: MatSnackBar,private Profile:ProfileUploadService,private route:ActivatedRoute,private exploreService:ExploreService) { }
  Allposts:any
  CurrentPost:any
  AuthorPosts:any;
  SamePosts:any;
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'].toString();
this.GetCurrentPost(id)
   

    
  }
 CopyAllcolors(){

 } 
copiedColor(){
  this._snackBar.open("Color Code Copied Successfully", 'X',{
    duration: 2000
  });
}
GetAuthorPosts(id)
{
  console.log('called',id)
  this.Profile.GetProfilePostById(id).subscribe((res) =>{
  
    let Posts:any=res;
    console.log(Posts.dribbble)
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
console.log(this.SamePosts)
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


GetCurrentPost(id){
  this.exploreService.GetPosts().subscribe((res)=>{
    this.Allposts=res;     
    this.CurrentPost = this.Allposts.filter((ele)=>{
      return ele._id === id;
    })[0];
    console.log(this.CurrentPost);
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

}
