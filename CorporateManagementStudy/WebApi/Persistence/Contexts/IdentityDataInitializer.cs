using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Domain.Models;

namespace WebApi.Persistence.Contexts
{
    public static class IdentityDataInitializer
    {
        public static void SeedData (UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
        {
            SeedRoles(roleManager);
            SeedUsers(userManager);
        }

        public static void SeedRoles (RoleManager<ApplicationRole> roleManager)
        {
            var result = roleManager.RoleExistsAsync("Admin").Result;
            if (!result)
            {
                ApplicationRole role = new ApplicationRole();
                role.Name = "Admin";
                IdentityResult roleResult = roleManager.CreateAsync(role).Result;
            }

            result = roleManager.RoleExistsAsync("VendorAdmin").Result;
            if (!result)
            {
                ApplicationRole role = new ApplicationRole();
                role.Name = "VendorAdmin";
                IdentityResult roleResult = roleManager.CreateAsync(role).Result;
            }
        }

        public static void SeedUsers(UserManager<ApplicationUser> userManager)
        {
            if (userManager.FindByNameAsync("admin").Result == null)
            {
                ApplicationUser user = new ApplicationUser();
                user.UserName = "admin";
                user.Email = "admin@ericsson.com";
                user.FullName = "Admin User";

                IdentityResult result = userManager.CreateAsync(user, "ABcd12%").Result;

                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "Admin").Wait();
                }
            }
        }
    }
}
