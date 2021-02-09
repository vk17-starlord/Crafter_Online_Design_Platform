import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service'
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  categories:any=[
    'HTML',
    'CSS',
    'JS',
    'API',
   
  ]
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      labels: {
        fontColor: '#edf6f9'
      }
    }
  };
  public dynHeight = 300;

  constructor(private  Projectservice:ProjectService,private Mat:MatSnackBar) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

  }
  Junior:any=[];
  Intermediate:any=[];
  Advanced:any=[];
  Newbie:any=[];

  pieChartLabels: Label[] = ['Newbie', 'Junior', 'Intermediate', 'Advanced'];
  pieChartData: SingleDataSet =[]
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  public pieChartPlugins = [{
  
  }];
  pieChartColor:any = [
    { backgroundColor: ["#219ebc", "#f48c06",'#7209b7',''] },
    { borderColor: ["#AEEBF2", "#FEFFC9"] }
  ]


Projects:any
projdetails:any;
Allprojects:any
  ngOnInit(): void {
this.Projects=this.Projectservice.GetAllProjects()
this.Allprojects=this.Projectservice.GetAllProjects();
console.log(this.Projects)
this.ShowCard(this.Projects[0].id);



// dataset
this.Junior=this.sortByDiff('Junior');
this.Newbie=this.sortByDiff('Newbie');
this.Advanced=this.sortByDiff('Advance');
this.Intermediate=this.sortByDiff('Intermediate');
console.log(this.Junior.length)
this.pieChartData= [this.Newbie.length,this.Junior.length,this.Intermediate.length,this.Advanced.length];
  }

  Tools:any=[
    {
      name:"",
      link:"",
      image:"",
      desc:"",
      logo:"",
    }

  ]

  sortByDiff(diff){
    return this.Projects.filter((ele)=>{
 
      if(ele.diff===diff){
         
        return ele;
    
      }
    })
  }
  sortArray:any=[]
  SortBylanguage(event){
  
    if(event.isUserInput) {
      let value=event.source.value;
      if(event.source.selected){
        this.sortArray.push(value);
      }else{
        const index = this.sortArray.indexOf(value);

        if (index >= 0) {
          this.sortArray.splice(index, 1);
        }
      }

      if(this.sortArray.length>0){

        this.Projects=this.Allprojects.filter((ele) =>{
          console.log(ele.lang)
          if(ele.lang.some(r => this.sortArray.includes(r))){
             return ele;
          }else{
          }
        })
      }else{
        this.Projects=this.Allprojects;
      }



    }
  

    

  }

  DownloadFile(name){
    this.Projectservice.GetZip(name).subscribe(data => {
      const blob = new Blob([data], {
        type: 'application/zip'
      });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      this.Mat.open('Project Successfully Downloaded','x',{
        duration:1000
      })
    });
  }

  Level:any;
  ChangeLevel(event){
    let level=event.source.value;
 
  
    if(level>1 && level<=3){
      this.Level="Newbie"
    }
    if(level>3 && level<=6){
      this.Level="Junior"
    }   
    if(level>6 && level<=9){
      this.Level="Intermediate"
    }   
    if(level>9){
      this.Level="Advance"
    }
    if(level===1){
 this.Projects=this.Allprojects;
    }else{
      
    this.Projects=this.Allprojects.filter((ele)=>{
      return ele.diff===this.Level;
    })

    }
    

  }

  ShowCard(id){
    console.log(id)
  this.projdetails =  this.Projects.filter((ele)=>{
      return ele.id === id
    })[0]

    console.log(this.projdetails)
  }
  formatLabel(value: number) {
    if (value <= 3) {
      return Math.round(value / 1000) + 'N';
    }
    if (value <= 6 && value >3) {
      return Math.round(value / 1000) + 'J';
    }
    if (value <= 9 && value >6) {
      return Math.round(value / 1000) + 'I';
    }
    
    if (value <= 12 && value >9) {
      return Math.round(value / 1000) + 'I';
    }
    return value;
  }
}
