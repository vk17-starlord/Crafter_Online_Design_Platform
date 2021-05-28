import { Component, OnInit } from '@angular/core';
import { ScrollService} from '../../scroll.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GuideService} from '../../services/guide.service';
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  constructor(private scroll:ScrollService , private guide:GuideService) { }

  customOptions: OwlOptions = {
    loop:false,
    center:false,
    margin:10,
    responsive:{
        0:{
            items:1,
          },
        500:{
            items:2,    
        },
        1000:{
            items:3,
        }
    }
  }
  
  Resources:any;
  Youtubers:any;

  ngOnInit(): void {

  }

  Menus:any=[
    'Books',
    "Courses",
    "Articles"
  ]
  CurrentMenu:any=this.Menus[0];

  ScrollById(id){
    this.scroll.scrollToElementById(id);
  }



}
