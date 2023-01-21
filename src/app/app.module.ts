import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/pages/pages.component';
import { JavaComponent } from './components/java/java.component';
import { AWSComponent } from './components/aws/aws.component';
import { DIGITALMARKETINGComponent } from './components/digitalmarketing/digitalmarketing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    PagesComponent,
    BlogComponent,
    ShopComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    JavaComponent,
    AWSComponent,
    DIGITALMARKETINGComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
