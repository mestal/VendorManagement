using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;
using WebApi.Domain.Queries;
using WebApi.Domain.Repositories;
using WebApi.Persistence.Contexts;

namespace WebApi.Persistence.Repositories
{
    public class VendorRepository : BaseRepository, IVendorRepository
    {
        public VendorRepository(AppDbContext context) : base(context) { }

        public async Task AddAsync(Vendor vendor)
        {
            await _context.Vendors.AddAsync(vendor);
        }

        public async Task<Vendor> FindByNameAsync(string name)
        {
            return await _context.Vendors
                                 .FirstOrDefaultAsync(p => p.Name == name);
        }

        public async Task AddEmployeeAsync(Employee employee)
        {
            await _context.Employees.AddAsync(employee);
        }

        public async Task<Vendor> FindByIdAsync(int vendorId)
        {
            return await _context.Vendors
                                 .FirstOrDefaultAsync(p => p.Id == vendorId);
        }

        public async Task<Employee> FindEmployeeByIdAsync(int id)
        {
            return await _context.Employees
                                 .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<List<Employee>> GetEmployeesAsync(EmployeesQuery query)//int? vendorId = null, EmployeeStatus? status = null)
        {
            IQueryable<Employee> queryable = _context.Employees
                                                    .Include(p => p.Vendor)
                                                    .AsNoTracking();

            if (query.VendorId.HasValue && query.VendorId > 0)
            {
                queryable = queryable.Where(p => p.Vendor.Id == query.VendorId);
            }

            if (query.Status.HasValue)
            {
                queryable = queryable.Where(p => p.Status == query.Status.Value);
            }

            int totalItems = await queryable.CountAsync();

            List<Employee> employees = await queryable.ToListAsync();

            return employees;
        }

        public async Task<List<Vendor>> GetVendorsAsync(VendorsQuery query)//int? vendorId = null, EmployeeStatus? status = null)
        {
            IQueryable<Vendor> queryable = _context.Vendors
                                                    .AsNoTracking();

            int totalItems = await queryable.CountAsync();

            List<Vendor> vendors = await queryable.ToListAsync();

            return vendors;
        }


        public void UpdateEmployee(Employee employee)
        {
            _context.Employees.Update(employee);
        }

        public async Task<List<VendorUser>> GetVendorUsersAsync(VendorUsersQuery query)
        {
            IQueryable<VendorUser> queryable = _context.VendorUsers
                                                    .Include(p => p.Vendor)
                                                    .AsNoTracking();

            queryable = queryable.Where(p => p.Vendor.Id == query.VendorId);

            int totalItems = await queryable.CountAsync();

            List<VendorUser> vendorUsers = await queryable.ToListAsync();

            return vendorUsers;
        }

        public async Task<VendorUser> GetVendorUserAsync(int userId)
        {
            IQueryable<VendorUser> queryable = _context.VendorUsers
                                                    .Include(p => p.Vendor)
                                                    .AsNoTracking();

            queryable = queryable.Where(p => p.Id == userId);

            VendorUser vendorUser = await queryable.FirstAsync();

            return vendorUser;
        }
    }
}
