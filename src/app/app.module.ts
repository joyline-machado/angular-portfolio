import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Service2Component } from './service2/service2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    Service2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
