import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { HomepageComponent} from './homepage/homepage.component'
import { LandingpageComponent  } from "./landingpage/landingpage.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ProfileformComponent} from './profileform/profileform.component';
import { AuthGuardGuard} from './auth-guard.guard';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BloghomeComponent } from './blog/bloghome/bloghome.component';
import { BlogformComponent } from './blog/blogform/blogform.component';
import { BlogdetailComponent } from './blog/blogdetail/blogdetail.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ExploreComponent } from './explore/explore/explore.component';
import { ExploredetailComponent } from './explore/exploredetail/exploredetail.component';
import { ProjectComponent } from './project/project/project.component';
import { ProjectdetailComponent } from './project/projectdetail/projectdetail.component';
import { ExploreformComponent } from './explore/exploreform/exploreform.component';
import { UploadpostComponent } from './explore/uploadpost/uploadpost.component';
const routes: Routes = [

  {path:'homepage',component:HomepageComponent, canActivate:[AuthGuardGuard]},
  {path:'landingpage',component:LandingpageComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'profileform',component:ProfileformComponent ,canActivate:[AuthGuardGuard]},
  {path:'Exploreform',component:ExploreformComponent ,canActivate:[AuthGuardGuard]},
  {path:'Uploadpost',component:UploadpostComponent ,canActivate:[AuthGuardGuard]},
  
  {path:'Editprofile',component:EditprofileComponent ,canActivate:[AuthGuardGuard]},
  {path:'ProfilePic',component:ProfilePicComponent ,canActivate:[AuthGuardGuard]},
  {path:'Explore',component:ExploreComponent ,canActivate:[AuthGuardGuard]},
  {path:'Project',component:ProjectComponent ,canActivate:[AuthGuardGuard]},

  {path:'profilepage/:id',component:ProfilePageComponent ,canActivate:[AuthGuardGuard]},
  
  {path:'blog',component:BloghomeComponent,canActivate:[AuthGuardGuard]},
  {path:'blogform',component:BlogformComponent,canActivate:[AuthGuardGuard]},
  {path:'blogdetail/:id',component:BlogdetailComponent,canActivate:[AuthGuardGuard]},
  {path:'Exploredetail/:id',component:ExploredetailComponent,canActivate:[AuthGuardGuard]},
  {path:'Projectdetail/:id',component:ProjectdetailComponent,canActivate:[AuthGuardGuard]},

  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
