import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IVendor } from 'src/app/shared/interfaces';
import { VendorDataService } from 'src/app/shared/vendor-data.services';

@Component({
  selector: 'app-vendor-grid',
  templateUrl: './vendor-grid.component.html',
  styleUrls: ['./vendor-grid.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorGridComponent implements OnInit {

  @Input() vendors: IVendor[]

  constructor(private dataService: VendorDataService) { }

  ngOnInit() {
    this.dataService.getVendors().subscribe(
      res => {
        this.vendors = res;
      },
      err => {
        console.log(err);
      },
    );
  }

}
