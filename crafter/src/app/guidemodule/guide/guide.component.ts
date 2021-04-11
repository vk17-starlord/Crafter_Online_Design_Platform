import { Component, OnInit } from '@angular/core';
import {GuideService } from '../../services/guide.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';
@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  constructor( guideService: GuideService) { }


  Timeline:any=[

    {
      title:"What is UI UX ? ",
      redirect:"https://uxplanet.org/what-is-ui-vs-ux-design-and-the-difference-d9113f6612de",
      para:"As a beginner, its important to know terms related to UI UX designing thus after reading this article will get you a basic understanding of UI UX designing ...."
    }

,
{
  title:"Why should i learn UI UX designing ? ",
  redirect:"https://xd.adobe.com/ideas/career-tips/many-benefits-learning-ux-design-2/",
  para:"UI UX is one of most trending and in demand skill ...but in this age of automation do we really need manual designs ??is this thing worth my time??why should i even consider this ?"
},

    {
      title:"How much will i earn as a ui ux designer? ",
      redirect:"https://www.glassdoor.co.in/Salaries/ui-ux-designer-salary-SRCH_KO0,14.htm",
para:" Glassdoor can help you to look out for salaries available for UI UX designers around the world.."
    }
,
{
  title:"What are the skills required for UI UX designing? ",
  redirect:"https://medium.com/@atolye15/what-skills-do-you-need-to-become-an-ui-designer-c38189265bd3",
para:" Becoming an UI designer is not that easy, right? It requires several skills like having a great vision, being good at some design programs and following the trends. These are just a few important things, that you should consider about when it comes to be an UI designer."
}
,
{
  title:"From  Where should i start my journey of UI UX designer",
  redirect:"https://uxdesign.cc/how-to-become-a-ui-ux-designer-self-taught-8a511170fd7c"
,
  para:"You have already stepped towards the first step by visiting our website..you just need bit of guidance to start out nicely!"
}
,   
{
  title:"Which are the online tools and softwares which can help me in Designing?",
 link:"/Tools"
  ,
  para:"Its very important to know what are the trending softwares and online websites available which will speedup your workflow of designing"
}
,  

{
  title:"Which are some of the best UI UX courses",
 link:"/courses"
  ,
  para:"We have got you some of the best Designing courses you can enroll in and also some free courses which beginners can try out to understand basics.."
}
,
{
  title:"Are there some Books available on designing??  ",
 link:"/books"
  ,
  para:"Yess!! Indeed their are many books out there which can enhance your skills to next level..."
}
,
{
  title:"Where can i find free ui ux resources??  ",
 link:"/resources"
  ,
  para:"we are providing free resources to all the users which includes ui kits font-kits and links to other free resources available online "
}
,

{
  title:"what next??",
 link:"/resources"
  ,
  para:"If you feel confident about your designing skills..then you must go for an online internship or start your own freelancing business!! "
}



  ]

  ngOnInit(): void {
  }

}
