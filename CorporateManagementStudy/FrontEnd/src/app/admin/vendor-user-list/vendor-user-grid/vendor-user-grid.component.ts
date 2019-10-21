import { Component, OnInit, Input } from '@angular/core';
import { IVendorUser } from 'src/app/shared/interfaces';
import { VendorDataService } from 'src/app/shared/vendor-data.services';

@Component({
  selector: 'app-vendor-user-grid',
  templateUrl: './vendor-user-grid.component.html',
  styleUrls: ['./vendor-user-grid.component.css']
})
export class VendorUserGridComponent implements OnInit {

  @Input() vendorUsers: IVendorUser[];
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
