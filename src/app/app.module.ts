import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CVComponent } from './Pages/cv/cv.component';
import { CompTechComponent } from './Pages/comp-tech/comp-tech.component';
import { ExpProComponent } from './Pages/exp-pro/exp-pro.component';
import { EtudesComponent } from './Pages/etudes/etudes.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CVComponent,
    CompTechComponent,
    ExpProComponent,
    EtudesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    NgbModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
