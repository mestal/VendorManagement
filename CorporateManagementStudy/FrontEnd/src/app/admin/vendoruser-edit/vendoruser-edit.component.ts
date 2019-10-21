import { Component, OnInit } from '@angular/core';
import { IVendorUserDetail } from 'src/app/shared/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorDataService } from 'src/app/shared/vendor-data.services';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  templateUrl: './vendoruser-edit.component.html',
  styleUrls: ['./vendoruser-edit.component.css']
})
export class VendorUserEditComponent implements OnInit {

  vendorUserForm: FormGroup;
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
    this.vendorUserForm = this.formBuilder.group({
      vendorname: [''],
      username: [''],
      password: ['']
    });
  }

  saveVendorUser(vendoruser: IVendorUserDetail) {
      this.vendorDataService.createVendorUser(vendoruser).subscribe((savedUser: IVendorUserDetail) => {
        this.router.navigate(['/admin/home']);
      });
  }
}
