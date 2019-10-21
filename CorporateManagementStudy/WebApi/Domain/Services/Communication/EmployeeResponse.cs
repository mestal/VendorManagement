using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Domain.Services.Communication
{
    public class EmployeeResponse : BaseResponse<Employee>
    {
        public EmployeeResponse(Employee employee) : base(employee) { }

        public EmployeeResponse(string message) : base(message) { }
    }
}
