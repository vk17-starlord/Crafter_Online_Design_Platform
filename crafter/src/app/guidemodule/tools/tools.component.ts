import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
 
  Apps:any=[{

    name:'Adobe XD',
    logo:'https://www.adobe.com/content/dam/cc/icons/xd.svg',
    desc:'Design, prototype and share user experiences for web, mobile, voice and more'
      ,link:'https://www.adobe.com/in/products/xd.html?promoid=3NQZBBTZ&mv=other',
 img:'https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_xd_3Dtransform_crop?$png$&jpegSize=300&wid=1920'
  }
,
  {
    img:'https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_ps_riverflow__4?$pjpeg$&jpegSize=200&wid=660',
   link:'https://www.adobe.com/in/products/photoshop.html?promoid=RL89NFBP&mv=other',
    name:'Photoshop',
    logo:'https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2020/mnemonics/photoshop.svg',
    desc:'Edit, composite, and create beautiful images, graphics, and art on desktop and iPad.'
    

  }
  ,
  {
    img:"https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_ai_river1_660x495?$pjpeg$&jpegSize=200&wid=660",
    link:'https://www.adobe.com/in/products/illustrator.html?promoid=RYGDN24L&mv=other',
    name:'Illustrator',
    logo:'https://www.adobe.com/content/dam/cc/icons/illustrator.svg',
    desc:'Create beautiful vector art and illustrations on desktop and iPad.'
    

  }

  ,
  {
    img:'https://www.adobe.com/content/dam/cc/us/en/products/aftereffects/motion-graphics/desktop/motion/SEO_Single-App_Motion-Graphics_P2b_416x208.gif',
    link:'https://www.adobe.com/in/products/aftereffects.html?promoid=2K4PCGG9&mv=other',
    name:'After Effects',
    logo:'https://www.adobe.com/content/dam/cc/icons/aftereffects.svg',
    desc:'Cinematic visual effects and motion graphics..'
    

  }

  ,
  {
    img:"https://i.pcmag.com/imagery/reviews/034ZguFPJgXgfslS6GqKxLG-5..1569469937.jpg",
    link:'https://www.sketch.com',
    name:'Sketch',


    logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png',
    desc:'Sketch is a vector graphics editor for macOS .'
    

  }
  ,
  {

    img:'https://images.ctfassets.net/c1zhnszcah7h/1wCzoDBuv0WflxSXYHU3tF/c5af21a431b1ccf462931744bbb6bdf9/Square_How_Spotify_Works_in_Figma_Temp.png',
    link:'https://www.figma.com',
    name:'Figma',
    logo:'https://i0.wp.com/publicmediastack.com/wp-content/uploads/2020/04/FIGMA.png?fit=1200%2C675&ssl=1',
    desc:'Figma is a vector graphics editor and prototyping tool'
    

  }

]

websites:any=[
  {
    name:'Coolors',
    link:'https://coolors.co/',
    desc:'Generate or browse beautiful color combinations for your designs.',
    img:'https://images.websitebuilderexpert.com/wp-content/uploads/2020/11/23053610/Coolors.png'
  },
  {
      link:'https://color.adobe.com/create/color-wheel'
      ,name:'Adobe color'
      ,img:'https://www.videomaker.com/wp-content/uploads/2020/09/Adobe-Color-Explore.gif',
       desc:'try out, create and save various colour schemes consists of a set of five colours.',
  },
  {
    link:'https://www.canva.com/colors/color-palette-generator/'
    ,name:'Canva '
    ,img:'https://static-cse.canva.com/blob/139430/09.-Refreshing-_-Pretty.png',
     desc:' create color combinations in seconds. Simply upload a photo',
},

  {
    img:'https://media.flaticon.com/share/flaticon-generic.jpg',
    link:'https://www.flaticon.com/',
    desc:'  Thousands of free icons in the largest database of free vector icons!'
    ,name:'Flaticon'
  }
  ,

 {
   img:'https://lh3.googleusercontent.com/-Bdu5yhyynw-Npepw3ERkztP_HRUfJurPpeVwK7zTmZncjE4p3h2bMfV9ao7SWPMNVZ5RWe1XZTQfHeHLj5_69BSXl0uueeaeUVd=w1064-v0',
   link:'https://material.io/icons/',
   desc:'Material icons are delightful, beautifully crafted symbols for common actions and items.'
   ,name:'Material Icons'
 }
 ,
 {
  img:'https://fontawesome.com/images/open-graph.png',
  link:'https://fontawesome.com/',
  desc:'The next generation of our icon library + toolkit is coming,'
  ,name:'Fontawesome'
}
,
{
  img:'https://www.pexels.com/assets/pexels-stock-photos-6c3d5eb0cbed47e1bdf44ff85ebd9cd4669f50b895b3c6e76a23a4fd43852099.jpg',
  name:'Pexels',
  desc:'Download and use the best free stock photos and videos. ✓ High-quality ✓ 100% free '
    ,link:'https://www.pexels.com/'

}
,
{
  img:'https://source.unsplash.com/assets/open-graph-e9fd6b8b42e121e1ca214d94f0551408baad7c04a1c3b63b230e6d62b6f1e28e.jpg',
  name:'Unsplash',
  desc:'Beautiful, free images and photos that you can download and use for any project.'
    ,link:'https://unsplash.com/'

}
,
{
  img:'https://play-lh.googleusercontent.com/jKXCdv5Q_65sl1HriQh7sEDLNhx10ExLOjmMIW0sPW8BF9G9M_H5-PjkPkLP3Cmt1nM',
  name:'Shutterstock',
  desc:'Over 200,000 New Images Added Daily. Discover Our Beautiful Collection'
    ,link:'https://www.shutterstock.com'

}
,
{
  img:'https://cdn.dribbble.com/assets/pro/landing-page/profile-desktop-x2-01baa8faad0be1942d913c0751648e13cc4d19228dcbb0d4e3abb2cb8f26b90a.png',
  name:'Dribbble',
  desc:'Dribbble is where designers gain inspiration, feedback, community, and jobs .'
    ,link:'https://dribbble.com/'

}
,
{
  img:'https://cdn.mos.cms.futurecdn.net/azUHp3WBrAGumLLiVu5KXf-1200-80.jpg',
  name:'Behance',
  desc:'Behance is the worlds largest creative network for showcasing and discovering creative work..'
    ,link:'https://www.behance.net/'

}
,
{
  img:'https://s.pinimg.com/images/facebook_share_image.png',
  name:'Pinterest',
  desc:'Discover recipes, home ideas, style inspiration and other ideas to try.'
    ,link:'https://in.pinterest.com/'

}
]

}
