using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;
using WebApi.Domain.Queries;
using WebApi.Domain.Repositories;
using WebApi.Domain.Services.Communication;

namespace WebApi.Services
{
    public class VendorService : IVendorService
    {
        private readonly IVendorRepository _vendorRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserService _userService;

        public VendorService(IVendorRepository vendorRepository, IUnitOfWork unitOfWork, IUserService userService)
        {
            _vendorRepository = vendorRepository;
            _unitOfWork = unitOfWork;
            _userService = userService;
        }
        public async Task<VendorResponse> SaveAsync(Vendor vendor)
        {
            try
            {
                await _vendorRepository.AddAsync(vendor);
                await _unitOfWork.CompleteAsync();

                return new VendorResponse(vendor);
            }
            catch (Exception ex)
            {
                return new VendorResponse($"An error occurred when saving the vendor: {ex.Message}");
            }
        }

        public async Task<EmployeeResponse> GetEmployee(int employeeId)
        {
            try
            {
                var employee = await _vendorRepository.FindEmployeeByIdAsync(employeeId);

                return new EmployeeResponse(employee);
            }
            catch (Exception ex)
            {
                return new EmployeeResponse($"An error occurred when getting the employee: {ex.Message}");
            }
        }

        public async Task<VendorUserResponse> CreateVendorUserAsync(string vendorName, VendorUser user, string password)
        {
            var vendor = await FindByNameAsync(vendorName);
            if (vendor == null)
            {
                return new VendorUserResponse($"Vendor not found.");
            }

            user.Vendor = vendor;
            await _userService.CreateUserAsync(user, password, "VendorAdmin");
            return new VendorUserResponse(user);
        }

        public async Task<Vendor> FindByNameAsync(string name)
        {
            return await _vendorRepository.FindByNameAsync(name);
        }

        public async Task<EmployeeResponse> SaveEmployeeAsync(int vendorUserId, Employee employee)
        {
            try
            {
                var vendorUser = await _vendorRepository.GetVendorUserAsync(vendorUserId);
                var vendor = await _vendorRepository.FindByIdAsync(vendorUser.Vendor.Id);
                employee.Vendor = vendor;

                await _vendorRepository.AddEmployeeAsync(employee);
                await _unitOfWork.CompleteAsync();

                return new EmployeeResponse(employee);
            }
            catch (Exception ex)
            {
                return new EmployeeResponse($"An error occurred when saving the employee: {ex.Message}");
            }
        }

        public async Task<List<Employee>> GetEmployeesAsync(EmployeesQuery query)
        {
            return await _vendorRepository.GetEmployeesAsync(query);
        }

        public async Task<List<Employee>> GetVendorEmployeesAsync(VendorEmployeesQuery vendorQuery)
        {
            var vendorUser = await _vendorRepository.GetVendorUserAsync(vendorQuery.VendorUserId); ;

            var query = new EmployeesQuery
            {
                VendorId = vendorUser.Vendor.Id
            };
            return await _vendorRepository.GetEmployeesAsync(query);
        }

        public async Task<List<Vendor>> GetVendorsAsync(VendorsQuery query)
        {
            return await _vendorRepository.GetVendorsAsync(query);
        }

        public async Task<EmployeeResponse> ChangeEmployeeStatus(int employeeId, EmployeeStatus employeeStatus)
        {
            try
            {
                var employee = await _vendorRepository.FindEmployeeByIdAsync(employeeId);
                if (employee == null)
                {
                    return new EmployeeResponse($"Employee not found.");
                }
                employee.Status = employeeStatus;
                _vendorRepository.UpdateEmployee(employee);
                await _unitOfWork.CompleteAsync();

                return new EmployeeResponse(employee);
            }
            catch (Exception ex)
            {
                return new EmployeeResponse($"An error occurred when saving the employee: {ex.Message}");
            }
        }

        public async Task<List<VendorUser>> GetVendorUsersAsync(VendorUsersQuery query)
        {
            return await _vendorRepository.GetVendorUsersAsync(query);
        }
    }
}
