import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user_id : any
  data :any ; 
  constructor( private toastr: ToastrService , private service : AuthService , private router : Router) {
    this.data = JSON.parse(this.service.getuserid());
    this.user_id = this.data.id
    console.log(this.user_id)
  }

}
