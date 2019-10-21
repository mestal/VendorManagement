using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;
using WebApi.Domain.Queries;
using WebApi.Domain.Services.Communication;

namespace WebApi.Services
{
    public interface IVendorService
    {
        Task<VendorResponse> SaveAsync(Vendor vendor);

        Task<VendorUserResponse> CreateVendorUserAsync(string vendorName, VendorUser user, string password);

        Task<EmployeeResponse> SaveEmployeeAsync(int vendorUserId, Employee employee);

        Task<List<Employee>> GetEmployeesAsync(EmployeesQuery query);
        Task<List<Employee>> GetVendorEmployeesAsync(VendorEmployeesQuery query);

        Task<List<Vendor>> GetVendorsAsync(VendorsQuery query);

        Task<EmployeeResponse> ChangeEmployeeStatus(int employeeId, EmployeeStatus employeeStatus);

        Task<EmployeeResponse> GetEmployee(int employeeId);

        Task<List<VendorUser>> GetVendorUsersAsync(VendorUsersQuery query);

        
    }
}
