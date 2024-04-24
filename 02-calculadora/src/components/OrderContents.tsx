import { formatCurrency } from '../helpers';
import { MenuItem, OrderItem } from '../types';

type OrderContentsProps = {
  orders: OrderItem[],
  deleteItem: (id: MenuItem['id']) => void
};

const OrderContents = ({ orders,deleteItem }: OrderContentsProps) => {
  return (
    <div>      
      <div className='mt-10'>       
        {orders.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between border-t border-gray-300 last-of-type:border-b py-2'
          >
            <div className=''>
              <p>
                {item.name} - {formatCurrency(item.price)}{' '}
              </p>
              <p className='font-black'>
                Cantidad: {item.quantity} -{' '}
                {formatCurrency(item.price * item.quantity)}{' '}
              </p>
            </div>
            <button className='size-8 rounded-full bg-red-500 hover:bg-red-400 transition font-black text-white' onClick={() => deleteItem(item.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContents;
