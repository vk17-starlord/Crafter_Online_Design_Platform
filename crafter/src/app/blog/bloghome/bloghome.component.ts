import { Component, OnInit } from '@angular/core';
import {BlogqouteService } from '../../services/blogqoute.service'
import {BlogService} from '../../services/blog.service'
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-bloghome',
  templateUrl: './bloghome.component.html',
  styleUrls: ['./bloghome.component.scss']
})
export class BloghomeComponent implements OnInit {
 class:any="";

  constructor(private BlogQoute:BlogqouteService ,private BlogService: BlogService    ) { }
searchquery:any=""
Categories:any=[
"All",
"Design",
"UI/UX",
"Graphic Design",
"Illustration",
"Coding"
]
sortbyCategory(item){

}
Blogs:any;
AllBlog:any;
RecentBlog:any
customOptions: OwlOptions = {
  loop:true,
  margin:10,
  responsive:{
      0:{
          items:2,
                  },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:7,
          
          loop:false
      }
  }
}

  ngOnInit(): void {

  
  

    this.BlogService.getallBlogs().subscribe((res)=>{
      this.Blogs=res
    
console.log(this.Blogs); 
this.AllBlog=res; 
this.AllBlog.forEach((ele)=>{
  
  console.log(ele.b_desc.length);
  if(ele.b_desc.length>50){
 ele.b_desc=ele.b_desc.slice(0,70).concat('...')
  }
})
let Sorted=this.AllBlog.sort((val1, val2)=>
{return new Date(val2.createdAt).getTime() - new 
 Date(val1.createdAt).getTime()}
 )
this.RecentBlog=Sorted[0];
})
   
    
  }



  SearchBlog(){
    this.Blogs= this.AllBlog.filter((blog)=>{
    if(blog.b_title.toLowerCase().indexOf(this.searchquery.toLowerCase())>-1){
    
      return blog
    }
    else if(blog.b_category.indexOf(this.searchquery)>-1){
      return blog;
      }
    })

  }
 
}
