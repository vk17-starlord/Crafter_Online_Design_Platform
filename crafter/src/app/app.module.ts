import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { MatSliderModule} from '@angular/material/slider';
import {MatRippleModule} from '@angular/material/core'; 
import {MatSelectModule} from '@angular/material/select'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatRippleModule,
    MatSliderModule,
    MatMenuModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
