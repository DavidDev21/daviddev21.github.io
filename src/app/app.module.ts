import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialBarComponent } from './components/social-bar/social-bar.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { ExperiencesComponent } from './components/pages/experiences/experiences.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PageControlComponent } from './components/page-control/page-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { DetailViewComponent } from './components/pages/detail-view/detail-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperiencesDetailComponent } from './components/pages/experiences-detail/experiences-detail.component';
import { ProjectsDetailComponent } from './components/projects-detail/projects-detail.component';
import { JoinStringsPipe } from './pipes/join-strings.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SocialBarComponent,
    HamburgerMenuComponent,
    ExperiencesComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    PageControlComponent,
    DetailViewComponent,
    ExperiencesDetailComponent,
    ProjectsDetailComponent,
    JoinStringsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
{provide: APP_BASE_HREF, useValue: '/my/app'} // if baseREF is desired
*/