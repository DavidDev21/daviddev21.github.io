import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }from './components/pages/home/home.component';
import { ContactComponent }from './components/pages/contact/contact.component';
import { ExperiencesComponent } from './components/pages/experiences/experiences.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { DetailViewComponent } from './components/pages/detail-view/detail-view.component';
import { ExperiencesDetailComponent } from './components/pages/experiences-detail/experiences-detail.component';
import { ProjectsDetailComponent } from './components/projects-detail/projects-detail.component';


/*
  Defining angular routes
*/
const routes: Routes = [
  { path: '', component: HomeComponent, data: { routeId: 0}},
  { path: 'experiences', component: ExperiencesComponent, data: { routeId: 1}},
  { path: 'projects', component: ProjectsComponent, data: { routeId: 2}},
  { path: 'contact', component: ContactComponent, data: { routeId: 3}},
  { path: 'experiences/detail/:contentId', component: ExperiencesDetailComponent, data: {routeId: 4}},
  { path: 'projects/detail/:contentId', component: ProjectsDetailComponent, data: {routeId: 5}},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
