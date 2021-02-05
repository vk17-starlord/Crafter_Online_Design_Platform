import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import {ProfileUploadService}  from '../services/profile-upload.service'
import {AuthenticationService} from '../services/authentication.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ExploreService } from '../services/explore.service';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  CurrentUser:any=''; 
  Cards:any=[
    {
      heading:"Explore",
      desc:"Trending Design To Inspire You !! ",
      img:"https://i.pinimg.com/564x/37/22/3d/37223dfaa6b4c108d287b6bee61e9948.jpg"
    },
    {
      heading:"Blogs",
      desc:"Where Good Ideas Find You ",
img:"https://i.pinimg.com/564x/e5/6a/e9/e56ae9a5ddaef82a110f357ab12f6b26.jpg"
    },
    {
      heading:"Guide",
      desc:"Learn Basic Of Design with us !!",
      img:"https://miro.medium.com/max/1000/1*wR-tA_eqG9tBC3EObUG_5A.png"

    },
   {
     heading:"Projects",
     desc:"start your Journey As Designer !",
     img:"https://i.pinimg.com/564x/2f/da/e3/2fdae3be164a06f85fed750b8f180ada.jpg"

    }

    ]
    RecentPosts:any=[]
    ShowUsers:boolean=false;
 RecentBlogs:any=[];
 RecentUsers:any=[];
 customOptions2: OwlOptions = {
  loop:false,
  center:true,
  margin:10,
  responsive:{
      0:{
          items:1,
        },
      500:{
          items:1,    
      },
      1000:{
          items:1,
          loop:false
      }
  }
}
customOptions: OwlOptions = {
  loop:false,
  center:false,
  margin:10,
  responsive:{
      0:{
          items:1,
        },
      500:{
          items:5,    
      },
      1000:{
          items:6,
      }
  }
}
PostOptions: OwlOptions = {
  loop:false,
  center:true,
  margin:10,
  responsive:{
      0:{
          items:1,
        },
      500:{
          items:3,    
      },
      1000:{
          items:4,
          loop:false
      }
  }
}



  constructor(private authentication:AuthenticationService,private _snackBar: MatSnackBar,private Profile:    ProfileUploadService  ,private blogService:BlogService ,private exploreService:ExploreService,private Projects:ProjectService ) { }
  NewProjects:any=[]
  ngOnInit(): void {

   let projects= this.Projects.GetAllProjects()
this.NewProjects=projects.slice(0,4);

   this.Profile.GetUser().subscribe((res)=>{
   
      this.CurrentUser=res[0];
      let year,month,dt
      var date = new Date(this.CurrentUser.createdAt);
      year = date.getFullYear();
  month = date.getMonth()+1;
  dt = date.getDate();
  
  if (dt < 10) {
  dt = '0' + dt;
  }
  if (month < 10) {
  month = '0' + month;
  }
  
  this.CurrentUser.createdAt =year+'-' + month + '-'+dt;
  
    })
    
  this.Profile.GetUserList().subscribe((res)=>{
    let Users:any=res;
    let Sorted=Users.sort((val1, val2)=>
    {return new Date(val2.createdAt).getTime() - new 
     Date(val1.createdAt).getTime()}
     )
  
     if(Sorted.length<4){
              this.RecentUsers=Sorted.slice(0,Sorted.length)
     }else{
            this.RecentUsers=Sorted.slice(0,4);
     }
    if(this.RecentUsers.length>0){
      console.log(this.RecentUsers)
      this.ShowUsers=true;

    }else{
      this.ShowUsers=false;
    }
  

    
      })
      
    this.exploreService.GetPosts().subscribe((res)=>{
      let Posts:any=[];
      Posts=res;
      

    let Sorted=Posts.sort((val1, val2)=>
    {return new Date(val2.createdAt).getTime() - new 
     Date(val1.createdAt).getTime()}
     )

     if(Sorted.length<4){
              this.RecentPosts=Sorted.slice(0,Sorted.length)
     }else{
            this.RecentPosts=Sorted.slice(0,4);
     }
        })
     

    this.blogService.getallBlogs().subscribe((res)=>{
    let Blogs:any=[];
    Blogs=res;
    

    let Sorted=Blogs.sort((val1, val2)=>
     {return new Date(val2.createdAt).getTime() - new 
      Date(val1.createdAt).getTime()}
      )

      if(Sorted.length<4){
               this.RecentBlogs=Sorted.slice(0,Sorted.length)
      }else{
             this.RecentBlogs=Sorted.slice(0,4);
      }
  })
  }
  onlogout(){
    this.authentication.logout();
    this._snackBar.open('logout successfull', 'X',{
     duration: 2000
   });
  }
}
