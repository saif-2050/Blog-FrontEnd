import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckauthGuard } from './guards/checkauth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) }, //lazy routing
  { path: 'login', component: LoginComponent , canActivate :[AuthGuard] },
  { path: '**', component: NotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
