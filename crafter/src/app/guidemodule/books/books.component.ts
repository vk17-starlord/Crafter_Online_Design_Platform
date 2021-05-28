import { Component, OnInit } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }
  Books=[


    {
      title:'Business Thinking for Designers',
    img:'https://s3.amazonaws.com/designco-web-assets/uploads/2020/03/thumb.png',
    desc:`
    Bring a business mind to design, and transform your career and company, with this free book by Apple and Electronic Arts design veteran Ryan Rumsey. Inside, he shares the essential vocabulary and strategies to effectively communicate with your business partners, plus tools, tips, and frameworks that you can put right to work.
    `
    ,authors:"By Ryan Rumsey"
    ,link:'https://www.designbetter.co/business-thinking-for-designers/need-know-business'
    ,bg:'#0072ff'
    },
    {
      title:'Remote Work for Design Teams'
      ,img:'https://s3.amazonaws.com/designco-web-assets/uploads/2020/03/thumb-revised.jpg'
      ,authors:'By Ben Goldman, Abby Sinnott, and Greg Storey'
      ,desc:'Learn the best practices for running a remote design team, and discover how designers can help teams collaborate while working apart. This book was written by our team at InVision, a fully distributed remote workforce since 2011.'
      ,link:'https://www.designbetter.co/remotework/design-remote-world'
    ,bg:'#2b0054'
    },
    {
      img:'https://s3.amazonaws.com/designco-web-assets/uploads/2020/02/AnimationHandbook_A.png',
      title:"Animation Handbook",
      authors:'By Ryan McLeod',
      desc:'When it comes to software design, animation is a limitless way to make digital products feel more real by replacing “telling” with “showing.” Learn how you can use animation to demonstrate abstract concepts, make products feel more life-like, and instill more emotion into digital experiences.'
      ,link:"https://www.designbetter.co/animation-handbook/purpose"
    ,bg:'#35cada'
    },
    {
      img:'https://s3.amazonaws.com/designco-web-assets/uploads/2018/08/sprints-thumb.png',
      title:'Enterprise Design Sprints'
      ,authors:'By Richard Banfield',
      desc:'Design sprints provide a problem-solving framework to get answers quickly and effectively. Learn to run sprints in any organization to reduce politics, increase collaboration, and put the focus on outcomes.'  
     ,link:'https://www.designbetter.co/enterprise-design-sprints/design-sprints-enterprises'
    ,bg:'#00848d' 
    }
    ,
     {
       title:'Design Systems Handbook'
       ,img:'https://s3.amazonaws.com/designco-web-assets/uploads/2017/11/systems-thumb.png'
       ,desc:"This book guides readers through best practices around planning, designing, building, and implementing a design system, with insights and first-hand experiences from experts who have gone through the journey."
        ,link:'https://www.designbetter.co/design-systems-handbook/introducing-design-systems'
       , authors:"By Marco Suarez, Jina Anne, Katie Sylor-Miller, Diana Mounter, and Roy Stanfield"
     ,bg:'#098c58'
      }
    ,
    {
      title:'DesignOps Handbook'
      ,img:'https://s3.amazonaws.com/designco-web-assets/uploads/2018/06/ops-thumb.png'
      ,desc:` Learn how creating centralized services and systems helps grow integrated, high-functioning design teams, with expert insights on operationalizing across workflows, hiring, team alignment, and more.`
       ,link:'https://www.designbetter.co/designops-handbook/introducing-designops'
       ,authors:"By Dave Malouf, Meredith Black, Collin Whitehead, Kate Battles, and Gregg Bernstein (editor)"
    ,bg:'#d83b70'
      },
      {
        link:'https://www.designbetter.co/design-leadership-handbook/becoming-a-design-leader',
        title:'Design Leadership Handbook',
        img:'https://s3.amazonaws.com/designco-web-assets/uploads/2017/06/leadership-thumb.png'
    ,authors:'By Aarron Walter and Eli Woolery'
    ,bg:'#782aa1'
    ,desc:'This book will help you get your bearings as a leader, gain confidence, and learn tactical approaches from experts who have been in your shoes so you can support your team and advance your career.'
      },
    {
    title:'Design Thinking Handbook',
    img:'https://s3.amazonaws.com/designco-web-assets/uploads/2017/05/thinking-thumb.png',
    authors:"By Eli Woolery",
    desc:"In this book, you’ll learn how to put the thinking-based framework popularized by the Stanford d.school into practice so you can take on challenges in your organization and reach insightful solutions.",
    bg:'#de1f38',
    link:'https://www.designbetter.co/design-thinking/why-we-need-design-thinking'
    },
    {
      title:'Principles of Product Design'
      ,img:'https://s3.amazonaws.com/designco-web-assets/uploads/2017/05/product-thumb.png',
      authors:'By Aarron Walter'
      ,desc:"Combined with the power of design thinking, these extensively researched best practices from some of the world’s best design teams will help you nail the fundamentals of product design and do great work."
      ,bg:'#0828cb',
      link:'https://www.designbetter.co/principles-of-product-design/guess-less'
    }
    ]
    
  ngOnInit(): void {
    console.log(this.Books);
  }



}
