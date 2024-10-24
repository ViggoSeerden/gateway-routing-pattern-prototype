import { useEffect, useState } from "react";

export default function Home() {

  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getUsers();
    getOrders();
  }, [])

  function getUsers() {
    fetch('http://localhost:9080/users/getAll', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => setUsers(data))
  }

  function getOrders() {
    fetch('http://localhost:9080/orders/getAll', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => setOrders(data))
  }

  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col">
        <p className="font-bold">Users</p>
        {users && users.map((user) => (
          <>
            <a href={`/users/${user['id']}`}>{user['id']} {user['name']}</a>
            <br />
          </>
        ))}
      </div>
      <div className="flex flex-col">
        <p className="font-bold">Orders</p>
        {orders && orders.map((order) => (
          <>
            <a href={`/orders/${order['orderId']}`}>{order['orderId']} ${order['price']} {order['userId']}</a>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
