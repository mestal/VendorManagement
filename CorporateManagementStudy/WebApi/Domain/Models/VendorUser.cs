using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Domain.Models
{
    public class VendorUser : ApplicationUser
    {
        public Vendor Vendor { get; set; }
    }
}
