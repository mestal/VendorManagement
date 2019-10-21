import { Component, OnInit } from '@angular/core';
import { IVendor } from 'src/app/shared/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorDataService } from 'src/app/shared/vendor-data.services';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  // selectedFormValues: { category?: ICategory } = {};
  categories: IVendor[] = [];
  vendorForm: FormGroup;
  operationText: string = "Create";

  constructor(
    private vendorDataService: VendorDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.initializeForm();

    });
  }

  ngOnInit() {
  }

  initializeForm() {
    // this.selectedFormValues = {};
    this.categories = [];
    this.vendorForm = this.formBuilder.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    });
  }

  saveVendor(vendor: IVendor) {
      this.vendorDataService.createVendor(vendor).subscribe((savedProduct: IVendor) => {
        this.router.navigate(['/admin/home']);
      });
  }
}
