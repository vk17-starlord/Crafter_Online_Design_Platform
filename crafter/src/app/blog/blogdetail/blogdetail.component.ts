import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {BlogService} from '../../services/blog.service'


@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {
  allblogs:any;
  CurrentBlog:any="";
  constructor(private route: ActivatedRoute,
    private location: Location,private blogService :BlogService) { }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'].toString();
  
    this.blogService.getallBlogs().subscribe((blogs) => {
      
     this.allblogs=blogs;
     this.CurrentBlog=this.allblogs.filter((blog)=>{
       return blog._id==id;

     })[0]
console.log(this.CurrentBlog)
    })
    
   

  }

}
