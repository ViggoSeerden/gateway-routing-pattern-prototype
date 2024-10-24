using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers;

[ApiController]
[Route("orders")]
public class OrderController : ControllerBase
{
    private readonly Order[] _orders =
    [
        new Order(1, 1, 10),
        new Order(2, 2, 20),
        new Order(3, 3, 30),
        new Order(4, 1, 40)
    ];

    [HttpGet("getAll")]
    public Order[] GetAllOrders()
    {
        return _orders;
    }
    
    [HttpGet("getById")]
    public Order? GetOrderById(int id)
    {
        var order = Array.Find(_orders, order => order.OrderId == id);
        return order;
    }    
    [HttpGet(("getByUserId"))]
    public Order[] GetOrderByUserId(int id)
    {
        return _orders.Where(order => order.UserId == id).ToArray();
    }
}