import { Component } from '@angular/core';
import { AuthRequest } from '../model/auth-request.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newrequest : AuthRequest = new AuthRequest();

  constructor( private toastr: ToastrService , private router : Router , private service : AuthService) {
  }


  Login(){
    this.service.Login(this.newrequest).subscribe(
      (response) => {
          
       this.toastr.success("successfully logged in", 'Done');
       this.service.save(response);
       this.router.navigate(['/']); 
       
      },
      (error) => {
        this.toastr.error(error.error, 'Error');

      }
       
    )}

     }
  

