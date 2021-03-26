import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  

   Resources:any={
 Youtubers:[
   {
     name:'Ran Segall',
     profile:'https://uploads-ssl.webflow.com/5dbe6dc615cb7f8453a36368/5dfe8287c3faab38b8ae3f15_47694598_2159951487601380_3161074802911870976_n.jpg'
     ,channel:'Flux',
     link:'https://www.youtube.com/channel/UCN7dywl5wDxTu1RM3eJ_h9Q'
     ,website:'https://www.flux-academy.com/'

    },
   {
    name:'Daniel Scott.',
    profile:'https://yt3.ggpht.com/ytc/AAUvwngWFbFDiwtuJ-p7AJeg2_AR6dv2g4V5zVRFc2Ohog=s176-c-k-c0x00ffffff-no-rj'
    ,channel:' Bring Your Own Laptop ',
    link:'https://www.youtube.com/user/BringYourOwnLaptop',
    website:'https://www.bringyourownlaptop.com'
  },
  
  {
    name:'Thomas cargill',
    profile:'https://yt3.ggpht.com/ytc/AAUvwngKSEFGUaYUBKlUk8M2vddrvSL6s82mBiUyA81hkg=s176-c-k-c0x00ffffff-no-rj'
    ,channel:'Satori Graphics ',
    link:'https://www.youtube.com/channel/UCoeJKtPJLoIBqWq4o8TDLpA',
    website:'https://satorigraphics.net/'
  },
  
 

  {
    name:'Gary Simon',
    profile:'https://yt3.ggpht.com/ytc/AAUvwnicQ5YCpxK5a_Qxv_CiqZAavecesw1o5sFqpe2A=s900-c-k-c0x00ffffff-no-rj'
    ,channel:' Design Course',
    link:'https://www.youtube.com/channel/UCoeJKtPJLoIBqWq4o8TDLpA',
    website:'https://designcourse.com/'
   ,subscribers:'749K'
  },



  ]
,

  Books:[

    {
      name:''
    }

  ]
,
Blogs:[
  {
    name:'Lukew',
    desc:'Lukew, a senior UX expert on digital product leader who has designed and built software used by more than one billion people worldwide also the founder of several companies.'
  ,link:'http://www.lukew.com/'
  },
  {
    name:'Smashing Magazine',
    desc:'A comprehensive website provides high-quality articles with the UX employee on Design, Coding, Mobile, and Word Press etc.'
  ,link:'https://www.smashingmagazine.com/'
  },
  {
    name:'UXbooth',
    desc:'A professional UX website. The difference between it and Smashing Magazine is that UXbooth focuses more on the aspect of user experience design.'
  ,link:'http://www.uxbooth.com/'
  },
  {
    name:'Mockplus Blog',
    desc:'It’s a new blog with very simple and clean interface, no more distraction from advertisements or others. Articles are all surrounding the topics of design tools, UI/UX design, web design, and mobile app design. A good design topic resource to follow.'
  ,link:'https://www.mockplus.com/blog/'
  },
  
]

,
Courses:[
  {
    name:'CAREERFOUNDRY',
   desc:'Then it’s time for a change. Take a world-class online course, get the support of their outstanding career change community and build a portfolio of UI design projects. There’s no experience needed and through the CareerFoundry network, they also guarantee to land your first job within 6 months.'
    ,Price: 'Paid',
     link:'https://careerfoundry.com/en/courses/ui-design-course'
},
{
  name:'Hackdesign',
 desc:'An easy to follow design course for people who do amazing things. The lessons are delivered to your email inbox each week, with links to articles, tutorials, and cheat sheets as well as task lists to get you thinking about good design and working towards improving your skills..'
  ,Price: 'Free',
   link:'https://hackdesign.org/'
},
{
  name:'Coursera',
 desc:'Take the world’s best courses, online. It’s the largest and most eclectic catalog for online higher education. Enroll in either self-paced (on-demand) or timed classes, ranging between four and twelve weeks. Verified certificates and specializations provide proof of participation, which can be shared via LinkedIn.'
  ,Price: 'Paid',
   link:'https://www.coursera.org/'
},
{
  name:' My.path',
 desc:'Contain both free and paid learning materials'
  ,Price: 'Paid/Free',
   link:'https://www.mypath.io/'
},

{
  name:' My.path',
 desc:'Contain both free and paid learning materials'
  ,Price: 'Paid/Free',
   link:'https://www.mypath.io/'
},
{
  name:' SKILLSHARE',
 desc:'Learn a New Skill Each Day. Learn creative skills in just 15 minutes a day with bite-sized lessons you can fit in anywhere.'
  ,Price: ' Paid',
   link:'https://www.skillshare.com/'
},
{
  name:'  GYMNASIUM',
 desc:'Gymnasium offers free online courses designed to teach creative professionals in-demand skills. We know these skills are in demand based on what we hear from our clients.'
  ,Price: ' Free',
   link:'https://www.skillshare.com/'
},
{
  name:'  lynda',
 desc:'Learn a new skill online, on your time. Over 4000 courses in Business, Technology and Creative Skills taught by industry experts.'
  ,Price: ' Free',
   link:'https://www.lynda.com/'
},
{
  name:'Udemy',
 desc:'Udemy is a global marketplace for learning and teaching online where students are mastering new skills and achieving their goals by learning from an extensive library of over 40,000 courses taught by expert instructors.'
  ,Price: ' Paid',
   link:'https://www.udemy.com/'
},
{
  name:'KHAN ACADEMY',
 desc:'You can learn anything, for free,for anyone, forever. KHAN ACADEMYs mission is to provide a free, world-class education to anyone, anywhere.'
  ,Price: ' Paid',
   link:'https://www.khanacademy.org/'
},
]
};
  
 
  constructor() { }

  GetResources(): void {
    return this.Resources;
  }

  
  
}

