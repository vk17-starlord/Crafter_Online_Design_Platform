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
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['India', 'UK','USA', 'Germany', 'France', 'China', 'Australia', 'UAE'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [17717,62000,97000, 60379, 52669, 47200, 76194,64000], label: 'Avg. Salary in dollars' },
  ];

  public barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#06d6a0',
    },
  ];

  Tool:{
  name:"Figma"
  logo:"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
  description:"Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows."
  type:"free" ,
  coverphoto:"https://miro.medium.com/max/5236/1*jNGdZPcjAINHhBERw_gwPA.jpeg" 
  }

  ngOnInit(): void {
  }

}
