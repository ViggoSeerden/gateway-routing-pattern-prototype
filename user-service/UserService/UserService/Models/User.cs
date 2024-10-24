namespace UserService.Models;

public class User(int id, string name)
{
    public int Id { get; set; } = id;

    public string Name { get; set; } = name;
}