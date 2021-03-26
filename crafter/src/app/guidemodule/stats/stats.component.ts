import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import {ScrollService} from '../../scroll.service';
import {chart} from  '../../shared/chart';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  CurrentLabel:any=[];
  CurrentDataSet:any=[];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartColors: Color[] = [
    { backgroundColor: '#045de9'}
  ]
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },

  ];

  constructor(private scroll:ScrollService) { }

  Currentdata:chart={
    id:"1",
    title:"Brainstorming & Ideation",
    info:"How do designers capture their thoughts? Once given a problem, what tools do they use to help them generate their best ideas? This could range from anywhere from long-form text to wireframes and UI. These tools begin to give us a glimpse into how designers do that—either for themselves, or to show others."
    ,
    insights:[

      "86% of respondents reported using pencil, paper, or a whiteboard for brainstorming.",
      "Many respondents seem comfortable brainstormning within their chosen UI design tools (44% in Sketch).",
      "A surprisingly strong showing from digital whiteboarding apps like Miro and Milanote, which weren't even listed as default responses to this question."
    ]
       ,
    label:['Paper/Whiteboard','Sketch','Figma','AdobeXD','Milanote','Photoshop','Other']
    ,
    Dataset:[
      { data: [2729, 1396, 906, 486,469, 379, 361], label: 'Ideation Tool' },
    ]
  }
  Countries:any=[
    {country: 'India' , response:123 , img:"https://uxtools.co/survey-assets/survey-2019/country-india.svg"},
    {country: 'USA' , response:648 , img:"https://uxtools.co/survey-assets/survey-2019/country-india.svg"},
    {country: 'Germany' , response:118 , img:"https://uxtools.co/survey-assets/survey-2019/country-germany.svg"},
    {country: 'France' , response:80 , img:"https://uxtools.co/survey-assets/survey-2019/country-france.svg"},
    {country: 'Canada' , response:143 , img:"https://uxtools.co/survey-assets/survey-2019/country-canada.svg"},
    {country: 'Israel' , response:77 , img:"https://uxtools.co/survey-assets/survey-2019/country-israel.svg"},
    {country:"UK", response:133, img:"https://uxtools.co/survey-assets/survey-2019/country-uk.svg"},
    {country: 'Other' , response:123 , img:"https://uxtools.co/survey-assets/survey-2019/country-globe.svg"},

  ]

  Data:any[]=[
    {
      id:"1",
      title:"Brainstorming & Ideation",
      info:"How do designers capture their thoughts? Once given a problem, what tools do they use to help them generate their best ideas? This could range from anywhere from long-form text to wireframes and UI. These tools begin to give us a glimpse into how designers do that—either for themselves, or to show others."
      ,
      insights:[

        "86% of respondents reported using pencil, paper, or a whiteboard for brainstorming.",
        "Many respondents seem comfortable brainstormning within their chosen UI design tools (44% in Sketch).",
        "A surprisingly strong showing from digital whiteboarding apps like Miro and Milanote, which weren't even listed as default responses to this question."
      ]
         ,
      label:['Paper/Whiteboard','Sketch','Figma','AdobeXD','Milanote','Photoshop','Other']
      ,
      Dataset:[
        { data: [2729, 1396, 906, 486,469, 379, 361], label: 'Ideation Tool' },
      ]
    }
    ,

    {
      id:"2",

      title:"User Flow & Site Map Tools",
      info:"User flows are an important but often forgotten part of digital design. Let's face it: modern UI tools were not built to easily draw arrows to express paths and relationships, but respondents seem determined to stick with them. While most respondents use Sketch, they're likely making use of plugins to accomplish this task (which is probably something I'll ask about next year)."
      ,
      insights:[

        "Most respondents seem to prefer to remain in their primary tools while creating user flows.",
        "5 of the top 10 tools in this category are web-based.",
        "There's a range of mid-tier tools here with similar usage such as Whimsical, Draw.io, Overflow.io, and Lucidchart."
      ]
         ,
      label:['Sketch','Whimsical','Draw.io','Figma','Other']
      ,
      Dataset:[
        { data: [1281, 348, 347, 300, 606], label: 'User Flow Tools' },
      ]
    },
    
    {
      id:"3",

      title:"Wireframing Tools",
      info:"Wireframing refers to the preliminary designs created before worrying about higher-fidelity details such as fonts and colors. The rise of design systems has caused a decrease in wireframing in general (though one could argue quick, disposable exploration using design system patterns is still wireframing). Nevertheless, only one of the tools listed in the top 10 is still considered a true wireframing tool (Balsamiq).",
      insights:[

        "The top three tools almost exactly mimic the UI Design category.",
        "Interestingly, Axure received more votes in the wireframing category than in UI Design. It remains relatively popular in prototyping, however..",
        "This year's wireframing newcomer is Whimsical. It grew almost 2x since last year to crack the wireframing top 10."
      ]
         ,
      label:['Sketch','Figma','AdobeXD','Illustrator','Balsamiq','Axure','Other']
      ,
      Dataset:[
        { data: [1605, 1000, 600, 209, 207,230,313], label: 'Wireframe Tools' },
      ]
    }
,
    {
      id:"4",
      title:"UI Design Tools",
      info:"This is where most UI designers spend their time—in their design tool of choice. These tools are used to create high-fidelity mock-ups and interface designs. They're valued for their pixel-perfect design, responsive nature, and integration with other tools. As you can see by the small  category here, there are very clear and distinct winners in this category.",
      insights:[
        "Figma nearly doubled from 12% of all responses to 23% since last year.",
        "This year Adobe XD surpassed it's older sibling, Adobe Photoshop.",
        "Figma and Adobe XD are battling to win the fight over Windows designers.."
      ]
         ,
      label:['Sketch','Figma','AdobeXD','Illustrator','Photoshop','Invision Studio','FrameX','Other']
      ,
      Dataset:[
        { data: [1911, 1178, 660, 365, 550,167,84,100], label: 'UI design Tools' },
      ] 
    },
    
    {
      id:"5",
      title:"Prototyping Tools",
      info:"Prototyping helps designers create interactive experiences from their designs in order to test and showcase them. Prototyping has been the battleground of the design tools ecosystem for several years now. As you can tell by the graph below, usage is much more spread out in this category than any other. Seems there is still no clear winner.",
      insights:[
        "Though Sketch came out on top, it actually stagnated at usage by 35% of respondents while InVision dropped from 43% to 35%.",
        "Figma grew 2.2x from being used by 14% of respondents to 32%, while Adobe XD also grew from 18% to 22%.",
        "Sketch, InVision, and Figma are almost equally used by respondents"
      ]
         ,
      label:['Sketch','Figma','AdobeXD','Illustrator','Photoshop','Invision Studio','FrameX','Other']
      ,
      Dataset:[
        { data: [1911, 1178, 660, 365, 550,167,84,100], label: 'Prototyping  Tools' },
      ]
      
    },
    {
      id:"6",
      title:"Design System Tools",
      info:"Design Systems are a hot topic in 2019. A Design System helps design and development teams collaborate with highly-defined components and specifications. Some of these tools help to create documentation libraries (like Storybook and zeroheight) while others create reusable design symbols to be placed in such a library. A surprising number of respondents still don't have a design system (perhaps because they're at an agency or working alone), or aren't managing it with any tools.",
      insights:[
        "Sketch usage dropped from 42% of respondents to 31% since 2018, while Figma grew from 12% to 26%.",
        "Abstract grew more than 5x from usage by 3% of respondents to 15%.",
        "1/3 of respondents reported that they either don't have a design system or they don't have tools to manage it."
      ]
         ,
      label:['Sketch','Figma','No System','None','Abstract','Storybook','Craft','Other']
      ,
      Dataset:[
        { data: [980,825, 600, 473, 428,201,178,240], label: 'Design System Tools' },
      ]
      
    }
  ]
selected:any=''
  ngOnInit(): void {
console.log(this.Countries)
  }

  scrollToId(id: string) {
    this.scroll.scrollToElementById(id);
  }

selectionChange(id){
  let Current=this.Data.filter(ele=>ele.id==id)
  this.Currentdata=Current[0];

}
}
