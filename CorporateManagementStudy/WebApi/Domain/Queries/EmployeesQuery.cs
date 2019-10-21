using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Domain.Queries
{
    public class EmployeesQuery
    {
        public EmployeeStatus? Status { get; set; }

        public int? VendorId { get; set; }
    }
}
