using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Resources
{
    public class NewVendorUserResource
    {
        public string VendorName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
