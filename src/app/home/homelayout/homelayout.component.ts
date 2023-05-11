import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent {
  constructor(private route:Router , private service:AuthService , private toastr: ToastrService  ) {
  }

  logout(){
    this.service.RemoveData() ;
    this.toastr.success("you are successfully Logout", 'Logout');
    this.route.navigate(['/login']);
  }
}
