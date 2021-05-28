import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GuideService } from 'src/app/services/guide.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { CourseformComponent } from '../courseform/courseform.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private bottomsheet: MatBottomSheet, private guide:GuideService    ) { }




  Courses:any=null;
  Youtubers:any;
  ngOnInit(): void {
this.Youtubers=this.guide.getYoutubers();
    console.log(this.Youtubers)
this.GetCourse()
  }

  openForm(){
    
    this.bottomsheet.open(CourseformComponent);
  }





  GetCourse(){
    this.guide.GetCourse().subscribe((res:any)=>{

     
     this.Courses=res.guide;
      console.log(this.Courses);
    })

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
            items:4,
            
            loop:false
        }
    }
  }
}
