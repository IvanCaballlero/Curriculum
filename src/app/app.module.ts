import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './home/education/education.component';
import { ExpertiseComponent } from './home/expertise/expertise.component';
import { LanguajeComponent } from './home/languaje/languaje.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ProfessionalProfileComponent } from './home/professional-profile/professional-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    ExpertiseComponent,
    LanguajeComponent,
    ProjectsComponent,
    ProfessionalProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
