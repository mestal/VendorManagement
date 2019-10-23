using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Domain.Models;
using WebApi.Domain.Queries;
using WebApi.Resources;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        private IVendorService _vendorService;
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public VendorController(IVendorService vendorService, IMapper mapper, IUserService userService)
        {
            _vendorService = vendorService;
            _mapper = mapper;
            _userService = userService;
        }

        [HttpPost]
        [Route("NewVendor")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> NewVendor(NewVendorResource newVendor)
        {
            var vendor = _mapper.Map<NewVendorResource, Vendor>(newVendor);
            var result = await _vendorService.SaveAsync(vendor);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var vendorResource = _mapper.Map<Vendor, VendorResource>(result.Resource);
            return Ok(vendorResource);
        }

        [HttpPost]
        [Route("NewVendorUser")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> NewVendorUserAsync(NewVendorUserResource newVendorUser)
        {
            var vendorUser = _mapper.Map<NewVendorUserResource, VendorUser>(newVendorUser);
            var result = await _vendorService.CreateVendorUserAsync(newVendorUser.VendorName, vendorUser, newVendorUser.Password);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var vendorResource = _mapper.Map<VendorUser, VendorUserResource>(result.Resource);
            return Ok(vendorResource);
        }

        [HttpPost]
        [Route("NewEmployee")]
        [Authorize(Roles = "VendorAdmin")]
        public async Task<ActionResult> NewEmployeeAsync(NewEmployeeResource newEmployeeResource)
        {
            var newEmployee = _mapper.Map<NewEmployeeResource, Employee>(newEmployeeResource);
            newEmployee.Status = EmployeeStatus.WaitingApproval;
            var vendorUserId = int.Parse(User.Claims.First(a => a.Type == "UserID").Value);

            var result = await _vendorService.SaveEmployeeAsync(vendorUserId, newEmployee);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var vendorResource = _mapper.Map<Employee, EmployeeResource>(result.Resource);
            return Ok(vendorResource);
        }

        [HttpPost]
        [Route("GetEmployees")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> GetEmployees(EmployeesQuery query)
        {
            var result = await _vendorService.GetEmployeesAsync(query);

            return Ok(result);
        }

        [HttpPost]
        [Route("GetVendorEmployees")]
        [Authorize(Roles = "VendorAdmin")]
        public async Task<ActionResult> GetVendorEmployees(VendorEmployeesQuery query)
        {
            query.VendorUserId = int.Parse(User.Claims.First(a => a.Type == "UserID").Value);

            var result = await _vendorService.GetVendorEmployeesAsync(query);

            return Ok(result);
        }

        [HttpPost]
        [Route("GetVendors")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> GetVendors(VendorsQuery query)
        {
            var result = await _vendorService.GetVendorsAsync(query);

            return Ok(result);
        }

        [HttpPost]
        [Route("ChangeEmployeeStatus")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> ChangeEmployeeStatus(ChangeEmployeeStatusResource changeEmployeeStatusResource)
        {

            var result = await _vendorService.ChangeEmployeeStatus(changeEmployeeStatusResource.EmployeeId, changeEmployeeStatusResource.EmployeeStatus);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var vendorResource = _mapper.Map<Employee, EmployeeResource>(result.Resource);
            return Ok();
        }

        [HttpPost]
        [Route("GetEmployee")]
        public async Task<ActionResult> GetEmployee(EmployeeResource employeeResource)
        {

            var result = await _vendorService.GetEmployee(employeeResource.Id);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var employeeRes = _mapper.Map<Employee, EmployeeResource>(result.Resource);
            return Ok(employeeRes);
        }


        [HttpPost]
        [Route("GetVendorUsers")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> GetVendorUsers(VendorUsersQuery query)
        {
            var result = await _vendorService.GetVendorUsersAsync(query);

            return Ok(result);
        }
    }
}