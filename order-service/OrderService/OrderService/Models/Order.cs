namespace WebApplication1.Models;

public class Order(int orderId, int userId, int price)
{
    public int OrderId { get; set; } = orderId;

    public int UserId { get; set; } = userId;

    public int Price { get; set; } = price;
}