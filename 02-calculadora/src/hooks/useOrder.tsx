import { useState } from 'react';
import { MenuItem, OrderItem } from '../types';

export default function useOrder() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {
    const newItem = { ...item, quantity: 1 };

    const existItem = orders.find((order) => order.id === newItem.id);

    if (existItem) {
      setOrders(
        orders.map((order) =>
          order.id === newItem.id
            ? { ...order, quantity: order.quantity + 1 }
            : order,
        ),
      );
    } else {
      setOrders([...orders, newItem]);
    }
  };

  const deleteItem = (id: MenuItem['id']) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const onPlaceOrder = () => {
    setOrders([])
    setTip(0)
  }
  return {
    orders,
    tip,
    setTip,
    addItem,
    deleteItem,
    onPlaceOrder
  };
}
