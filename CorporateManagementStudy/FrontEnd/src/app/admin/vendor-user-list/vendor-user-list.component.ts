import { Component, OnInit, Input } from '@angular/core';
import { IVendorUser } from 'src/app/shared/interfaces';
import { VendorDataService } from 'src/app/shared/vendor-data.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-user-list',
  templateUrl: './vendor-user-list.component.html',
  styleUrls: ['./vendor-user-list.component.css']
})
export class VendorUserListComponent implements OnInit {

  title: string
  filterText: string
  vendorUsers: IVendorUser[] = []
  filteredVendorUsers: IVendorUser[] = []

  totalRecords: number = 0;
  pageSize: number = 10;
  vendorid: number;
  constructor(private dataService: VendorDataService,
    private route: ActivatedRoute) 
  { 
    this.vendorid = +this.route.snapshot.paramMap.get('vendorid');
  }

  ngOnInit() {
    this.title = 'Vendor Users'
    this.filterText = ''

    this.getVendorUsers(this.vendorid);
    //this.getCustomersPage(1);
  }

  getVendorUsers(vendorId: number) {
    this.dataService.getVendorUsers(vendorId).subscribe((vendorUsers: IVendorUser[]) => {
      this.vendorUsers = vendorUsers;
      this.filteredVendorUsers = vendorUsers;
    });
  }

  filterChanged(data: string) {
    if (data && this.vendorUsers) {
      data = data.toLocaleUpperCase();
      this.filteredVendorUsers = this.vendorUsers.filter(vendorUser => vendorUser.username.toLocaleUpperCase().indexOf(data) > -1);
    } else {
      this.filteredVendorUsers = this.vendorUsers;
    }
  }
}
