import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
  Profile:any;
  ngOnInit(): void {
     this.Profile=this.data.Profile;
    if(this.Profile){
       console.log(this.Profile);
      
    }
  }

}
