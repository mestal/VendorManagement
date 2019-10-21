import { Component, OnInit, Input } from '@angular/core';
import { IVendorEmployee } from 'src/app/shared/interfaces';
import { VendorDataService } from 'src/app/shared/vendor-data.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-employee-list',
  templateUrl: './admin-employee-list.component.html',
  styleUrls: ['./admin-employee-list.component.css']
})
export class AdminEmployeeListComponent implements OnInit {

  title: string
  filterText: string
  employees: IVendorEmployee[] = []
  filteredEmployees: IVendorEmployee[] = []

  totalRecords: number = 0;
  pageSize: number = 10;
  vendorid: number;
  constructor(private dataService: VendorDataService,
    private route: ActivatedRoute) 
  { 
  }

  ngOnInit() {
    this.title = 'Employees'
    this.filterText = ''

    this.getEmployees();
    //this.getCustomersPage(1);
  }

  getEmployees() {
    this.dataService.getEmployees().subscribe((employees: IVendorEmployee[]) => {
      this.employees = employees;
      this.filteredEmployees = employees;
    });
  }

  filterChanged(data: string) {
    if (data && this.employees) {
      data = data.toLocaleUpperCase();
      this.filteredEmployees = this.employees.filter(employee => employee.name.toLocaleUpperCase().indexOf(data) > -1);
    } else {
      this.filteredEmployees = this.employees;
    }
  }
}
