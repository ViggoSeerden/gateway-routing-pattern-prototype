import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function User() {
    const router = useRouter()
    const id = router.query.id

    const [user, setUser] = useState()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (user) {
            getOrders();
        } else {
            getUser();
        }
    }, [user, id])

    function getUser() {
        fetch(`http://localhost:9080/users/getById?id=${id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => setUser(data))
    }

    function getOrders() {
        fetch(`http://localhost:9080/orders/getByUserId?id=${id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => setOrders(data))
    }

    return (
        <div className="flex flex-col gap-1">
            {user && (
                <>{user['id']} {user['name']}</>
            )}
            <br />
            <p className="font-bold">Orders</p>
            {orders && orders.map((order) => (
                <>
                    {order['orderId']} ${order['price']} {order['userId']} <br/>
                </>
            ))}
        </div>
    );
}
