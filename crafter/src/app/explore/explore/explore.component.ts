import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {ExploreService} from '../../services/explore.service';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private exploreService:ExploreService) { }
  SelectedColor:boolean = false;
  Default:any="#"
  HexValue:any

  Categories:any=[
    {
      img:"https://cdn.dribbble.com/users/2227807/screenshots/14543126/media/1fb90d3db799552e42104f4cf52ccd5e.png?compress=1&resize=1000x750",
      category:"All"
    },
{
  img:"https://cdn.dribbble.com/users/2227807/screenshots/14543126/media/1fb90d3db799552e42104f4cf52ccd5e.png?compress=1&resize=1000x750",
  category:"web design"
},
{
  img:"https://cdn.dribbble.com/users/1475931/screenshots/9837144/media/1dc3c9d6609dc1efba0a7f005582ae2e.png?compress=1&resize=1000x750",
  category:"mobile design"
},
{
  img:"https://cdn.dribbble.com/users/2624112/screenshots/8379173/media/24aa3391e8f969788dd285a48d6941bc.jpg?compress=1&resize=1000x750",
category:"illustration"

},
{
  img:"https://cdn.dribbble.com/users/532338/screenshots/14972912/media/cc66c09073e05d51e8b86b6622863542.png?compress=1&resize=1000x750",
  category:"Typography"
}
]
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
            items:4,
            
            loop:false
        }
    }
  }
 
 Posts:any
 Allposts:any   
 SearchQuery:any=""
BasicPallete:any=[
  '#f44336',
  '#e91e63',
  '#673ab7',
  '#2196f3',
  '#009688',
  '#4caf50',
  '#ffeb3b',
  
  '#ffffff',
  '#000000'
]
 ngOnInit(): void {
this.exploreService.GetPosts().subscribe((res)=>{
this.Posts=res;
this.Allposts=res;
console.log(this.Posts)
})
  }
  CurrentColor:any;
  NotFound:boolean = false;

  searchPosts(){
console.log(this.SearchQuery)
this.Posts=this.Allposts.filter((ele)=>{
  if(ele.d_title.toLowerCase().indexOf(this.SearchQuery.toLowerCase())>-1 || ele.d_category.toLocaleString().toLowerCase().search(this.SearchQuery.toLocaleString().toLowerCase())>-1 ){
return ele;
  }
})
if(this.Posts.length>0){
this.NotFound=false;
}else{
  this.NotFound=true;

}
  }


  AddHex(){
    this.HexValue=this.Default;
    this.CurrentColor=this.HexValue;
    this.SelectedColor=true;

    if(this.HexValue!==""){
      const newPosts= this.Allposts.filter((ele)=>{
        if(ele.d_color.includes(this.HexValue)){
          return ele;
        }
        
            })
            this.Posts=newPosts;        
            if(this.Posts.length<1){
              console.log('No Results Found')
              this.NotFound=true;
            }else{
              this.NotFound=false;

            } 
    
          }else{
            console.log('No Results Found')
            
          }
  }


  BasicColor(val)
{
  this.CurrentColor=val;
  this.SelectedColor=true;

  this.Default=val;
  if(val!==""){
    const newPosts= this.Allposts.filter((ele)=>{
      if(ele.d_color.includes(val)){
        return ele;
      }
      
          })
          this.Posts=newPosts;        
         if(this.Posts.length<1){
           console.log('No Results Found')
           this.NotFound=true;
         }else{
          this.NotFound=false;

        } 
          
        }
}
  ColorSearch(){

  }
 
  
  sortbyCategory(category:any){
let newPosts=this.Allposts.map((ele)=>{
if(ele.d_category===category){
  return ele
}
})
newPosts = newPosts.filter(function( element ) {
  return element !== undefined;
});
console.log(newPosts)
this.Posts=newPosts;

if(category=='All'){
this.Posts=this.Allposts;  
}
this.NotFound=false;
this.HexValue=""
this.Default="#"
this.SelectedColor=false;
}



}
