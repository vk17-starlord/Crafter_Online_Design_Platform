import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  
  constructor(private  Projectservice:ProjectService) { }
Projects:any
  ngOnInit(): void {
this.Projects=this.Projectservice.GetAllProjects()
console.log(this.Projects)
  }

}
