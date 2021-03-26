import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  projects = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/f00lkcojzyklnglc3ffr.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1610103713/Challenges/fslc5umukphmgeiqr0hn.jpg",
      title: "Loopstudios landing page",
      para: "This challenge is perfect if you're looking to test your CSS Grid chops. Even without Grid, this project will be a fun one to help you practice your layout skills!",
      diff: "Junior",
      linkURL: "loopstudios-landing-page-main(4).zip",
      lang: [
        "HTML",
        "CSS",
       "JS"
  ],
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/ua4zwoxu3i9avrzrusre.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1602235457/Challenges/ird5rpi2iicascfikil8.jpg",
      title: "FAQ accordion card",
      para: "In this challenge, you'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!",
      diff: "Newbie",
      linkURL: "faq-accordion-card-main.zip",
      lang: [
        "HTML",
        "CSS",
       "JS"
  ],
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/cemesnztibailziek4ly.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1601039745/Challenges/vxre1m4efwtuczl8qqg5.jpg",
      title: "Room homepage",
      para: "This small homepage challenge packs a big punch to test your layout skills. There's also a slider in there to add a JS layer for extra practice.",
      diff: "Intermediate",
      linkURL: "room-homepage-master.zip",
      lang: [
        "HTML",
        "CSS",
       "JS"
  ],
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hlfgqwj3chzij3t5erjv.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1603385838/Challenges/tmr3zjtypswhmqaylwgi.jpg",
      title: "Testimonials grid section",
      para: "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
      diff: "Junior",
      linkURL: "testimonials-grid-section-main.zip",
      lang: [
        "HTML",
        "CSS",
       "JS"
  ],
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/a0t2zk1zww7gmanfoix3.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1599649626/Challenges/i55lfaclccmhjx2zstme.jpg",
      title: "Social proof section",
      para: "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
      diff: "Newbie",
      linkURL: "social-proof-section-master.zip",
      lang: [
        "HTML",
        "CSS",
       "JS"
  ],
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/zfgce1seaqfllpuktpai.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1598712094/Challenges/agtwcl5w9grwxc2wxq4s.jpg",
      title: "IP Address Tracker",
      para: "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
      diff: "Intermediate",
      linkURL: "ip-address-tracker-master.zip",
      lang: [
        "HTML",
        "CSS",
        "JS",
        "API"
     ],
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hoqxujbnnumv1ildmus4.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1573656785/Challenges/zwm6jyfx78nqql3cy8ra.jpg",
      title: "Rock, Paper, Scissors game",
      para: "This challenge will test your HTML, CSS and JavaScript skills. There's even a Rock, Paper, Scissors, Lizard, Spock version if you really want to challenge yourself.",
      diff: 'Advance',
      linkURL: "rock-paper-scissors-master.zip",
      lang: [
       "HTML",
      "CSS",
        "JS"
      ]
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/yhq5ihanseyinzwblaw1.jpg",
      image1: "https://res.cloudinary.com/dz209s6jk/image/upload/v1554827486/Challenges/yoceoj7gmuyvk0bf0wwf.jpg",
      title: "REST Countries API with color theme switcher",
      para: "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
      diff: "Advance",
      linkURL: "rest-countries-api-with-color-theme-switcher-master.zip",
      lang: [
         "HTML",
         "CSS",
         "JS",
         "API"
      ]
    }
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

  GetZip(name){
    return this.http.get(`http://localhost:3000/get_projects/${name}`, {
      responseType: 'arraybuffer'
    });
  }

}
