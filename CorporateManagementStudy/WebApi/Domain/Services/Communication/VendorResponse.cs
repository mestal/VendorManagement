using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Domain.Services.Communication
{
    public class VendorResponse :BaseResponse<Vendor>
    {
        public VendorResponse(Vendor vendor) : base(vendor) { }

        public VendorResponse(string message) : base(message) { }
    }
}
