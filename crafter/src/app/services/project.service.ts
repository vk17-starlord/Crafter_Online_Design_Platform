import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects:any = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/f00lkcojzyklnglc3ffr.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1610103713/Challenges/fslc5umukphmgeiqr0hn.jpg",
      title: "Loopstudios landing page",
      para: "This challenge is perfect if you're looking to test your CSS Grid chops. Even without Grid, this project will be a fun one to help you practice your layout skills!",
      diff: "Junior",
      linkURL: "/src/project/loopstudios-landing-page-main.zip"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ua4zwoxu3i9avrzrusre.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1610103713/Challenges/fslc5umukphmgeiqr0hn.jpg",
      title: "FAQ accordion card",
      para: "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
      diff: "Newbie",
      linkURL: "/src/project/loopstudios-landing-page-main.zip"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/cemesnztibailziek4ly.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1610103713/Challenges/fslc5umukphmgeiqr0hn.jpg",
      title: "Room homepage",
      para: "This small homepage challenge packs a big punch to test your layout skills. There's also a slider in there to add a JS layer for extra practice.",
      diff: "Intermediate",
      linkURL: "/src/project/loopstudios-landing-page-main.zip"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hlfgqwj3chzij3t5erjv.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1610103713/Challenges/fslc5umukphmgeiqr0hn.jpg",
      title: "Testimonials grid section",
      para: "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
      diff: "Junior",
      linkURL: "/src/project/loopstudios-landing-page-main.zip"
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/a0t2zk1zww7gmanfoix3.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1610103713/Challenges/fslc5umukphmgeiqr0hn.jpg",
      title: "Social proof section",
      para: "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
      diff: "Newbie",
      linkURL: "/src/project/loopstudios-landing-page-main.zip"
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/zfgce1seaqfllpuktpai.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1610103713/Challenges/fslc5umukphmgeiqr0hn.jpg",
      title: "IP Address Tracker",
      para: "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
      diff: "Intermediate",
      linkURL: "/src/project/loopstudios-landing-page-main.zip"
    },
  ]

  GetAllProjects(){
    return this.projects;
  }

  GetProjectById(id){
   const project= this.projects.filter((ele)=>{
    return ele.id==id;  
    })

    return project[0];
  }

  constructor() { }
}
