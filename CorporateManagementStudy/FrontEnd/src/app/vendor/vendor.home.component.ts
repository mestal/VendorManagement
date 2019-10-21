import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vendor-home',
  templateUrl: './vendor.home.component.html',
  styles: []
})
export class VendorHomeComponent implements OnInit {
  userDetails;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    // this.service.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res;
    //   },
    //   err => {
    //     console.log(err);
    //   },
    // );
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);///user
  }
}
