import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ExploreService } from 'src/app/services/explore.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
@Component({
  selector: 'app-uploadpost',
  templateUrl: './uploadpost.component.html',
  styleUrls: ['./uploadpost.component.scss']
})
export class UploadpostComponent implements OnInit {

  constructor( private _snackBar:MatSnackBar,private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: any,private exploreService:ExploreService) {}

  ngOnInit(): void {
    console.log(this.data)
  }

  Upload(){
    console.log(this.data.post)
    this.exploreService.Post(this.data.post).subscribe((res)=>{
    this._snackBar.open('Post Uploaded Successfully !!')
    this.router.navigateByUrl('/explore')
    },(err)=>{
      console.log(err)
    })

  }

}
