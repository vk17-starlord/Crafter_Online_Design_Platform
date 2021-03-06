import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatListModule} from '@angular/material/list'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button'; 
import {MatRippleModule} from '@angular/material/core'; 
import {MatSelectModule} from '@angular/material/select';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component'; 
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms'; 
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuardGuard} from './auth-guard.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { ProfileformComponent } from './profileform/profileform.component';
import {MatStepperModule} from '@angular/material/stepper'; 
import {AngularFireStorageModule} from "@angular/fire/storage"
import {AngularFireModule } from '@angular/fire';
import { ProfilePageComponent } from './profile-page/profile-page.component'
import { BloghomeComponent } from './blog/bloghome/bloghome.component';
import { BlogdetailComponent } from './blog/blogdetail/blogdetail.component';
import { BlogformComponent } from './blog/blogform/blogform.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ExploreComponent } from './explore/explore/explore.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ExploredetailComponent } from './explore/exploredetail/exploredetail.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ProjectComponent } from './project/project/project.component';
import { ProjectdetailComponent } from './project/projectdetail/projectdetail.component';
import { ExploreformComponent } from './explore/exploreform/exploreform.component';
import {MatChipsModule} from '@angular/material/chips';
import { UploadpostComponent } from './explore/uploadpost/uploadpost.component'; 
import { ChartsModule } from 'ng2-charts';
import { GuideComponent } from './guidemodule/guide/guide.component';
import { StatsComponent } from './guidemodule/stats/stats.component';
import { ResourceComponent } from './guidemodule/resource/resource.component';
import { ToolsComponent } from './guidemodule/tools/tools.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    HeaderComponent,
    ProfileformComponent,
    ProfilePageComponent,
    BloghomeComponent,
    BlogdetailComponent,
    BlogformComponent,
    AboutMeComponent,
    EditprofileComponent,
    ProfilePicComponent,
    ExploreComponent,
    ExploredetailComponent,
    ProjectComponent,
    ProjectdetailComponent,
    ExploreformComponent,
    UploadpostComponent,
    GuideComponent,
    StatsComponent,
    ResourceComponent,
    ToolsComponent,
    
  ],
  imports: [
    MatChipsModule,
    FormsModule,MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    HttpClientModule,
    MatStepperModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatIconModule,
    ClipboardModule,
    MatRippleModule,MatListModule,
    MatSliderModule,
    MatMenuModule,
    MatTabsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    
    MatBadgeModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatInputModule ,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,
    CarouselModule, 
    ChartsModule,
    DragDropModule,


  ],
  providers: [AuthGuardGuard,{
    provide:HTTP_INTERCEPTORS  ,
    useClass:TokenInterceptorService,
    multi: true
    }
  
  ]
    
    ,
    entryComponents: [
     ProfileformComponent,
     AboutMeComponent,
     ProfilePicComponent,
   UploadpostComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
