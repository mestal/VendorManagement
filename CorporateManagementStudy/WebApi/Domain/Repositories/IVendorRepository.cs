﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;
using WebApi.Domain.Queries;

namespace WebApi.Domain.Repositories
{
    public interface IVendorRepository
    {
        Task AddAsync(Vendor vendor);
        Task<Vendor> FindByNameAsync(string name);

        Task AddEmployeeAsync(Employee employee);

        Task<Vendor> FindByIdAsync(int vendorId);

        Task<List<Employee>> GetEmployeesAsync(EmployeesQuery query);

        Task<List<Vendor>> GetVendorsAsync(VendorsQuery query);

        Task<Employee> FindEmployeeByIdAsync(int id);

        void UpdateEmployee(Employee employee);

        Task<List<VendorUser>> GetVendorUsersAsync(VendorUsersQuery query);

        Task<VendorUser> GetVendorUserAsync(int userId);
    }
}
