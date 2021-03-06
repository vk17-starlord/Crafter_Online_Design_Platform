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
       desc:'try out, create and save various colour schemes, each of which consists of a set of five colours." ... Users can export a color scheme straight into Adobe Photoshop, Adobe Illustrator and Adobe InDesign'
  },
  {
    img:'https://www.pexels.com/assets/pexels-stock-photos-6c3d5eb0cbed47e1bdf44ff85ebd9cd4669f50b895b3c6e76a23a4fd43852099.jpg',
    name:'Pexels',
    desc:'Download and use the best free stock photos and videos. ✓ High-quality ✓ 100% free ✓ No attribution needed.'
      ,link:'https://www.pexels.com/'

  },
  {
    img:'https://www.pexels.com/assets/pexels-stock-photos-6c3d5eb0cbed47e1bdf44ff85ebd9cd4669f50b895b3c6e76a23a4fd43852099.jpg',
    name:'Pexels',
    desc:'Download and use the best free stock photos and videos. ✓ High-quality ✓ 100% free ✓ No attribution needed.'
    , link:'https://pixabay.com/'

  },

 {
   img:'https://lh3.googleusercontent.com/-Bdu5yhyynw-Npepw3ERkztP_HRUfJurPpeVwK7zTmZncjE4p3h2bMfV9ao7SWPMNVZ5RWe1XZTQfHeHLj5_69BSXl0uueeaeUVd=w1064-v0',
   link:'https://material.io/icons/',
   desc:'Material icons are delightful, beautifully crafted symbols for common actions and items. Download on desktop to use them in your digital products for Android, iOS, and web.'
   ,name:'Material Icons'
 }


]

}
