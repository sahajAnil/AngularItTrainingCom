import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/pages/pages.component';
import { ShopComponent } from './components/shop/shop.component';
import {JavaComponent } from './components/java/java.component';
import { AWSComponent } from './components/aws/aws.component';
import {DIGITALMARKETINGComponent} from './components/digitalmarketing/digitalmarketing.component'


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'course',component:CourseComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'pages',component:PagesComponent},
  {path:'shop',component:ShopComponent},
  {path:'java',component:JavaComponent},
  {path:'Aws',component:AWSComponent},
  {path:'Digitalmarketing',component:DIGITALMARKETINGComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
