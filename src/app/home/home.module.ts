import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    HomelayoutComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
   
  ]
})
export class HomeModule { }
