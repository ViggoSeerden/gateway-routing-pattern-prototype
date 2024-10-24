import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Order() {
    const router = useRouter()
    const id = router.query.id

    const [order, setOrder] = useState()

    useEffect(() => {
        getOrder();
    }, [id])

    function getOrder() {
        fetch(`http://localhost:9080/orders/getById?id=${id}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => setOrder(data))
    }

    return (
        <div className="flex flex-col gap-1">
            {order && (
                <>{order['orderId']} ${order['price']} {order['userId']}</>
            )}
        </div>
    );
}
