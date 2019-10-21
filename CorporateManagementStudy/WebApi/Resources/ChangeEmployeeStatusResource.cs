using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Resources
{
    public class ChangeEmployeeStatusResource
    {
        public int EmployeeId { get; set; }

        public EmployeeStatus EmployeeStatus { get; set; }
    }
}
