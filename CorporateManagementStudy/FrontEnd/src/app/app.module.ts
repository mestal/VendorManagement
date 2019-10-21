import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { VendorDataService } from './shared/vendor-data.services';
import { AdminHomeComponent } from './admin/admin.home.component';
import { VendorListComponent } from './admin/vendor-list/vendor-list.component';
import { VendorGridComponent } from './admin/vendor-list/vendor-grid/vendor-grid.component';
import { FilterTextboxComponent } from './admin/vendor-list/filter-textbox/filter-textbox.component';
import { VendorEditComponent } from './admin/vendor-edit/vendor-edit.component';
import { VendorUserListComponent } from './admin/vendor-user-list/vendor-user-list.component';
import { VendorUserGridComponent } from './admin/vendor-user-list/vendor-user-grid/vendor-user-grid.component';
import { VendorUserEditComponent } from './admin/vendoruser-edit/vendoruser-edit.component';
import { VendorHomeComponent } from './vendor/vendor.home.component';
import { VendorEmployeeEditComponent } from './vendor/vendoremployee-edit/vendoremployee-edit.component';
import { VendorEmployeeListComponent } from './vendor/vendor-employee-list/vendor-employee-list.component';
import { VendorEmployeeGridComponent } from './vendor/vendor-employee-list/vendor-employee-grid/vendor-employee-grid.component';
import { AdminEmployeeListComponent } from './admin/admin-employee-list/admin-employee-list.component';
import { AdminEmployeeGridComponent } from './admin/admin-employee-list/admin-employee-grid/admin-employee-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
    VendorListComponent,
    VendorGridComponent,
    FilterTextboxComponent,
    VendorEditComponent,
    VendorUserListComponent,
    VendorUserGridComponent,
    VendorUserEditComponent,
    VendorHomeComponent,
    VendorEmployeeEditComponent,
    VendorEmployeeListComponent,
    VendorEmployeeGridComponent,
    AdminEmployeeListComponent,
    AdminEmployeeGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [UserService, VendorDataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
