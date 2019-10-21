using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApi.Migrations
{
    public partial class EmployeeStatusadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IdentityRole<int>");

            migrationBuilder.AddColumn<byte>(
                name: "Status",
                table: "Employees",
                nullable: false,
                defaultValue: (byte)0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Employees");

            migrationBuilder.CreateTable(
                name: "IdentityRole<int>",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    NormalizedName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentityRole<int>", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "IdentityRole<int>",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { 1, "35c85d71-7048-4b04-856c-eb73a6625d0e", "Admin", "ADMİN" });

            migrationBuilder.InsertData(
                table: "IdentityRole<int>",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { 2, "4f353521-3e55-4459-9167-ce622f8b9de3", "VendorAdmin", "VENDORADMİN" });
        }
    }
}
