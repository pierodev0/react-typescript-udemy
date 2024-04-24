import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalsProps = {
  orders: OrderItem[],
  tip: number,
  onPlaceOrder: () => void
}
const OrderTotals = ({orders,tip,onPlaceOrder} : OrderTotalsProps) => {
  const subTotalAmount = orders.reduce((total,item) => total + (item.price * item.quantity),0)
  const tipAmount = subTotalAmount * tip;
  const totalAmount = subTotalAmount + tipAmount;
  return (
    <div className="space-y-3">
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y propina</h2>
            <p>Subtotal a pagar: <span className="font-bold">{formatCurrency(subTotalAmount)} </span></p>

            <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
            <p>Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
        </div>
        <button onClick={onPlaceOrder} className="w-full bg-black text-white font-bold p-3 disabled:opacity-10" disabled={ totalAmount === 0}>
            Guardar orden
        </button>
    </div>
  )
}

export default OrderTotals