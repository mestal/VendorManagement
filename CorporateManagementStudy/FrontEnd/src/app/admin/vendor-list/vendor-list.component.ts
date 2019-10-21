import { Component, OnInit } from '@angular/core';
import { IVendor } from 'src/app/shared/interfaces';
import { VendorDataService } from 'src/app/shared/vendor-data.services';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  title: string
  filterText: string
  vendors: IVendor[] = []
  filteredVendors: IVendor[] = []

  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private dataService: VendorDataService) { }

  ngOnInit() {
    this.title = 'Vendors'
    this.filterText = ''

    this.getVendors();
    //this.getCustomersPage(1);
  }

  getVendors() {
    this.dataService.getVendors().subscribe((vendors: IVendor[]) => {
      this.vendors = vendors;
      this.filteredVendors = vendors;
    });
  }

  filterChanged(data: string) {
    if (data && this.vendors) {
      data = data.toLocaleUpperCase();
      this.filteredVendors = this.vendors.filter(vendor => vendor.Name.toLocaleUpperCase().indexOf(data) > -1);
    } else {
      this.filteredVendors = this.vendors;
    }
  }

}
