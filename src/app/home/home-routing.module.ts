import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AuthGuard } from '../guards/auth.guard';
import { CheckauthGuard } from '../guards/checkauth.guard';

const routes: Routes = [
  { path: '', component: HomelayoutComponent  , canActivate :[CheckauthGuard]  ,children:[
  { path: '', component: DashboardComponent },
  { path: 'addpost', component: AddPostComponent },
  
] },   


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
