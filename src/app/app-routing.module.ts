import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent,title:"login-page"},
  
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent,
    canActivate:[authGuard],
    title:'home-page'},  
  
  
  {path:'blog',component:BlogComponent,title:'blog-page'},
  {path:'about',component:AboutComponent,title:'about-page '},
  {path:'contact',component:ContactComponent,title:'contact-page ' , },
  {path:'productdetails/:prodid',
    canActivate:[authGuard],
    component:ProductDetailsComponent,title:"details"},
  {path:"**",component:NotfoundComponent,title:"404page"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
