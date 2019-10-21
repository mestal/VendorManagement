import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IVendor, IVendorEmployee, IChangeEmployeeStatusResult, IChangeEmployeeStatusRequest } from 'src/app/shared/interfaces';
import { IVendorUser } from 'src/app/shared/interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class VendorDataService {
  
    constructor(private httpClient: HttpClient) { }

    getVendors(): Observable<IVendor[]> {
        return this.httpClient.post<IVendor[]>(environment.apiUrl + '/Vendor/GetVendors', {});
    }

    createVendor(vendor: IVendor): Observable<IVendor> {
        var request = vendor;

        return this.httpClient.post<IVendor>(environment.apiUrl + '/Vendor/NewVendor', request);
    }

    createVendorUser(vendorUser: IVendorUser): Observable<IVendorUser> {
        var request = vendorUser;

        return this.httpClient.post<IVendorUser>(environment.apiUrl + '/Vendor/NewVendorUser', request);
    }

    createVendorEmployee(vendorEmployee: IVendorEmployee): Observable<IVendorEmployee> {
        var request = vendorEmployee;

        return this.httpClient.post<IVendorEmployee>(environment.apiUrl + '/Vendor/NewEmployee', request);
    }

    getVendorUsers(vendorId: number): Observable<IVendorUser[]> {
        return this.httpClient.post<IVendorUser[]>(environment.apiUrl + '/Vendor/GetVendorUsers', { "VendorId": vendorId });
    }

    getVendorEmployees(vendorId: number): Observable<IVendorEmployee[]> {
        return this.httpClient.post<IVendorEmployee[]>(environment.apiUrl + '/Vendor/GetVendorEmployees', { "VendorId": vendorId });
    }

    getEmployees(): Observable<IVendorEmployee[]> {
        return this.httpClient.post<IVendorEmployee[]>(environment.apiUrl + '/Vendor/GetEmployees', { });
    }

    changeEmployeeStatus(request: IChangeEmployeeStatusRequest): Observable<IChangeEmployeeStatusResult> {
        return this.httpClient.post<IChangeEmployeeStatusResult>(environment.apiUrl + '/Vendor/ChangeEmployeeStatus', request);
    }
}
