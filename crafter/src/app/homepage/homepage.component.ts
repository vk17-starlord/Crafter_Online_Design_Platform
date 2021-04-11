import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import {ProfileUploadService}  from '../services/profile-upload.service'
import {AuthenticationService} from '../services/authentication.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Router} from '@angular/router';
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
      desc:"Trending Design To Inspire You !! Find your design inspiration with us and share..",
      img:"https://i.pinimg.com/564x/37/22/3d/37223dfaa6b4c108d287b6bee61e9948.jpg"
      ,link:"/Explore",    

    },
    {
      heading:"Blogs",
      desc:"The best ideas can change who we are. Medium is where those ideas take shape.. ",
img:"https://i.pinimg.com/564x/e5/6a/e9/e56ae9a5ddaef82a110f357ab12f6b26.jpg"
,link:"/blog",    
},
    {
      heading:"Guide",
      desc:"Learn  adaptable system of guidelines, components, and tools that support the best practices ...!!",
      img:"https://i.pinimg.com/564x/9e/00/55/9e005544f786ea57d88d0b9f368f731c.jpg"
      ,
      link:"/Guide",
    },
   {
     heading:"Projects",
     desc:"Learn different techniques by seeing how other people have approached challenges..",
     img:"https://i.pinimg.com/564x/8f/60/83/8f608388e3f6b47a223c752305968d06.jpg"
     ,link:"/Project",

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



  constructor(private router:Router, private authentication:AuthenticationService,private _snackBar: MatSnackBar,private Profile:    ProfileUploadService  ,private blogService:BlogService ,private exploreService:ExploreService,private Projects:ProjectService ) { }
  NewProjects:any=[]
   b_skeleton=true;
   p_skeleton=true;
   loaduser=true;

   download(name){
     
    this.Projects.GetZip(name).subscribe(data => {
      const blob = new Blob([data], {
        type: 'application/zip'
      });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
 
    });
   }
  ngOnInit(): void {

    this.NewProjects=    this.Projects.GetAllProjects().filter((ele)=>{
      if(ele.diff=='Junior' ||  ele.diff=='Newbie'){
        return ele;
      }
    })

    this.NewProjects=this.NewProjects.slice(0,3)
console.log(this.NewProjects,'projects')
    this.blogService.getallBlogs().subscribe((res)=>{
      let Blogs:any=[];
      Blogs=res;
      let Sorted=Blogs.sort((val1, val2)=>
       {return new Date(val2.createdAt).getTime() - new 
        Date(val1.createdAt).getTime()}
        )
  
        if(Sorted.length<5){
                 this.RecentBlogs=Sorted.slice(0,Sorted.length)
        }else{
               this.RecentBlogs=Sorted.slice(0,4);
               this.RecentBlogs.forEach((ele)=>{
                ele.b_body[0].para[0].text=ele.b_body[0].para[0].text.slice(0,150).concat('...')
    console.log( ele.b_body[0].para[0].text)
              })
              this.b_skeleton=false;
               
        }
    })

   this.Profile.GetUser().subscribe((res)=>{
     
      this.CurrentUser=res[0];
      this.p_skeleton=false;
      console.log(this.CurrentUser)
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
  
     if(Sorted.length<6){
              this.RecentUsers=Sorted.slice(0,Sorted.length)
     }else{
            this.RecentUsers=Sorted.slice(0,6);
     }
    if(this.RecentUsers.length>0){
      this.RecentUsers.forEach((ele)=>{

        if(ele.postedBy.userName.length>10){
ele.postedBy.userName=ele.postedBy.userName.trim().slice(0,20).concat('..');

        }
      })
      this.ShowUsers=true;
 console.log(this.RecentUsers)

 this.loaduser=false;
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
     

   
  }
  onlogout(){
    this.authentication.logout();
    this._snackBar.open('logout successfull', 'X',{
     duration: 2000
   });

   this.router.navigateByUrl('/')
   
  }
}
