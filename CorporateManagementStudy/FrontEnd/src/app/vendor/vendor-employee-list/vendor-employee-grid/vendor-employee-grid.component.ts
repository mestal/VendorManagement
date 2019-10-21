import { Component, OnInit, Input } from '@angular/core';
import { IVendorEmployee } from 'src/app/shared/interfaces';
import { VendorDataService } from 'src/app/shared/vendor-data.services';

@Component({
  selector: 'app-vendor-employee-grid',
  templateUrl: './vendor-employee-grid.component.html',
  styleUrls: ['./vendor-employee-grid.component.css']
})
export class VendorEmployeeGridComponent implements OnInit {

  @Input() vendorEmployees: IVendorEmployee[];
  //@Input() vendorId: number;
  constructor(private dataService: VendorDataService) { }

  ngOnInit() {
    // this.dataService.getVendorUsers(this.vendorId).subscribe(
    //   res => {
    //     this.vendorUsers = res;
    //   },
    //   err => {
    //     console.log(err);
    //   },
    // );
  }

}
