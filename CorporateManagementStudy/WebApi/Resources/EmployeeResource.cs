using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Resources
{
    public class EmployeeResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public EmployeeStatus Status { get; set; }
    }
}
