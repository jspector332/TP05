namespace TP05.Models;
using Dapper;
using Microsoft.Data.SqlClient;

public class BD
{
    private string _connectionString = @"Server=localhost;DataBase = TP05-Sessions;integrated Security = True;TrustServerCertificate=True;";

    public void agregarUsuario(Usuario usuario)
    {
        string query = "INSERT INTO Usuarios (nombreUsuario, contrasenia, nombre, apellido, tipoUsuario) VALUES (@pNombreUsuario, @pContrasenia, @pNombre, @pApellido, @pTipoUsuario)";
        using(SqlConnection connection = new SqlConnection(_connectionString)){
            connection.Execute(query, new {pNombreUsuario = usuario.nombreUsuario, pContrasenia = usuario.contrasenia, pNombre = usuario.nombre, pApellido = usuario.apellido, pTipoUsuario = usuario.tipoUsuario});
        }
    }

    public Usuario verificarUsuario(Usuario usuario)
    {
        Usuario usuarioExistente = null;
        using(SqlConnection connection = new SqlConnection(_connectionString)){
            string query = "SELECT * FROM Usuarios WHERE nombreUsuario = @pNombreUsuario";
            usuarioExistente = connection.QueryFirstOrDefault<Usuario>(query, new {pNombreUsuario = usuario.nombreUsuario});
        }
        return usuarioExistente;
    }
}