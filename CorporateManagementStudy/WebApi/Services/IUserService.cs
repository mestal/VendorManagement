using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Services
{
    public interface IUserService
    {
        Task CreateUserAsync(ApplicationUser user, string password, string roleName);
    }
}
