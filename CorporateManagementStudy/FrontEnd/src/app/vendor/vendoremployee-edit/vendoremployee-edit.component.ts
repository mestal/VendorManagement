import { Component, OnInit } from '@angular/core';
import { IVendorEmployee } from 'src/app/shared/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorDataService } from 'src/app/shared/vendor-data.services';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: './vendoremployee-edit.component.html',
  styleUrls: ['./vendoremployee-edit.component.css']
})
export class VendorEmployeeEditComponent implements OnInit {

  vendorEmployeeForm: FormGroup;
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
    this.vendorEmployeeForm = this.formBuilder.group({
      name: ['']
    });
  }

  saveVendorEmployee(vendoremployee: IVendorEmployee) {
      this.vendorDataService.createVendorEmployee(vendoremployee).subscribe((savedUser: IVendorEmployee) => {
        this.router.navigate(['/vendor/home']);
      });
  }
}
