using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Domain.Services.Communication
{
    public class VendorUserResponse : BaseResponse<VendorUser>
    {
        public VendorUserResponse(VendorUser vendorUser) : base(vendorUser) { }

        public VendorUserResponse(string message) : base(message) { }
    }
}
