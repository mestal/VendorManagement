import { Component, OnInit, Input } from '@angular/core';
import { IVendorEmployee, IChangeEmployeeStatusRequest, IChangeEmployeeStatusResult } from 'src/app/shared/interfaces';
import { VendorDataService } from 'src/app/shared/vendor-data.services';

@Component({
  selector: 'app-admin-employee-grid',
  templateUrl: './admin-employee-grid.component.html',
  styleUrls: ['./admin-employee-grid.component.css']
})
export class AdminEmployeeGridComponent implements OnInit {

  @Input() employees: IVendorEmployee[];
  result: IChangeEmployeeStatusResult;
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

  getEmployees() {
    this.dataService.getEmployees().subscribe((employees: IVendorEmployee[]) => {
      this.employees = employees;
    });
  }

  changeEmployeeStatus(employeeId: number, newStatus: number) {

    let request = {
      EmployeeId: employeeId,
      EmployeeStatus: newStatus
    } as IChangeEmployeeStatusRequest;

    // request.EmployeeStatus = newStatus;
    // request.EmployeeId = employeeId;

    this.dataService.changeEmployeeStatus(request).subscribe((result: IChangeEmployeeStatusResult) => {
      this.result = result;

    });
  }


  changeEmployeeStatus2(employee: IVendorEmployee, newStatus: number) {

    let request = {
      EmployeeId: employee.id,
      EmployeeStatus: newStatus
    } as IChangeEmployeeStatusRequest;

    this.dataService.changeEmployeeStatus(request).subscribe((result: IChangeEmployeeStatusResult) => {
      this.result = result;
      employee.status = newStatus;
      
    });
  }
}
