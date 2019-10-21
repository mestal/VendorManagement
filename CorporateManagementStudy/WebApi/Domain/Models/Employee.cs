using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Domain.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string Name { get; set; }

        [Required]
        public Vendor Vendor { get; set; }

        public EmployeeStatus Status { get; set; }
    }
}
