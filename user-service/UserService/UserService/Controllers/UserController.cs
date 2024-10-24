using Microsoft.AspNetCore.Mvc;
using UserService.Models;

namespace UserService.Controllers;

[ApiController]
[Route("users")]
public class UserController : ControllerBase
{
    private readonly User[] _users =
    [
        new User(1, "John"),
        new User(2, "Doe"),
        new User(3, "The third one"),
    ];

    [HttpGet("getAll")]
    public User[] GetAllUsers()
    {
        return _users;
    }
    
    [HttpGet("getById")]
    public User? GetUserById(int id)
    {
        var user = Array.Find(_users, user => user.Id == id);
        return user;
    }    
}