namespace TP05.Models;
using Dapper;
using Microsoft.Data.SqlClient;

public class BD
{
    private string _connectionString = @"Server=localhost;DataBase = TP05;integrated Security = True;TrustServerCertificate=True;";
}