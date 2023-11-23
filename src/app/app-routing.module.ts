import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Service2Component } from './service2/service2.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'about-me', component: AboutComponent},
  { path: 'contact-me', component: ContactComponent},
  { path: 'service2', component: Service2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
