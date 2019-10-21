import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/admin.home.component';
import { VendorEditComponent } from './admin/vendor-edit/vendor-edit.component';
import { VendorUserListComponent } from './admin/vendor-user-list/vendor-user-list.component';
import { VendorUserEditComponent } from './admin/vendoruser-edit/vendoruser-edit.component';
import { VendorHomeComponent } from './vendor/vendor.home.component';
import { VendorEmployeeEditComponent } from './vendor/vendoremployee-edit/vendoremployee-edit.component';
import { AdminEmployeeListComponent } from './admin/admin-employee-list/admin-employee-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component: LoginComponent },
  {path:'admin/home',component:AdminHomeComponent,canActivate:[AuthGuard]},
  {path:'admin/newvendor',component:VendorEditComponent,canActivate:[AuthGuard]},
  {path:'admin/vendorusers/:vendorid',component:VendorUserListComponent,canActivate:[AuthGuard]},
  {path:'admin/newvendoruser',component:VendorUserEditComponent,canActivate:[AuthGuard]},
  {path:'vendor/home',component:VendorHomeComponent,canActivate:[AuthGuard]},
  {path:'vendor/newvendoremployee',component:VendorEmployeeEditComponent,canActivate:[AuthGuard]},
  {path:'admin/employees',component:AdminEmployeeListComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
