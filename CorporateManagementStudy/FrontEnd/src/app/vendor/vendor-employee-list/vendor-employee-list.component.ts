import { Component, OnInit, Input } from '@angular/core';
import { IVendorEmployee } from 'src/app/shared/interfaces';
import { VendorDataService } from 'src/app/shared/vendor-data.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-employee-list',
  templateUrl: './vendor-employee-list.component.html',
  styleUrls: ['./vendor-employee-list.component.css']
})
export class VendorEmployeeListComponent implements OnInit {

  title: string
  filterText: string
  vendorEmployees: IVendorEmployee[] = []
  filteredVendorEmployees: IVendorEmployee[] = []

  totalRecords: number = 0;
  pageSize: number = 10;
  vendorid: number;
  constructor(private dataService: VendorDataService,
    private route: ActivatedRoute) 
  { 
    this.vendorid = +this.route.snapshot.paramMap.get('vendorid');
  }

  ngOnInit() {
    this.title = 'Vendor Employees'
    this.filterText = ''

    this.getVendorEmployees(this.vendorid);
    //this.getCustomersPage(1);
  }

  getVendorEmployees(vendorId: number) {
    this.dataService.getVendorEmployees(vendorId).subscribe((vendorEmployees: IVendorEmployee[]) => {
      this.vendorEmployees = vendorEmployees;
      this.filteredVendorEmployees = vendorEmployees;
    });
  }

  filterChanged(data: string) {
    if (data && this.vendorEmployees) {
      data = data.toLocaleUpperCase();
      this.filteredVendorEmployees = this.vendorEmployees.filter(vendorEmployee => vendorEmployee.name.toLocaleUpperCase().indexOf(data) > -1);
    } else {
      this.filteredVendorEmployees = this.vendorEmployees;
    }
  }
}
