import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  

   Resources:any={
 Books:  []
    ,
   Courses: [
     
   ]
    ,
   Videos:[]
  };

   Tools:any ={

    Softwares:[]
    ,

    Websites:[]
    ,

    Illustrations:[] ,
    StockPhotos:[] ,
    Inspirations:[] ,
    ColorPalletes:[]
  }

   Statistics:any =[

   ]

   GuideLines = [

   ]
  constructor() { }

  GetResources(): void {
    return this.Resources;
  }

  GetTools(): void {
    return this.Tools;
  }

  GetStatistics():void {
    return this.Statistics
  }

}

