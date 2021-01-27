import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service'
import { Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {
  project:any;
  constructor(private route:ActivatedRoute,private projectService:ProjectService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'].toString();
console.log(this.projectService.GetProjectById(2))
   this.project=this.projectService.GetProjectById(id)
console.log(this.project)
  }

}
