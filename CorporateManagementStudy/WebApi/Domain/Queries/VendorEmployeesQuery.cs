using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Domain.Queries
{
    public class VendorEmployeesQuery
    {
        public int VendorId { get; set; }

        public int VendorUserId { get; set; }

    }
}
