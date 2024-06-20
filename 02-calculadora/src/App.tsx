import { MenuItem, OrderContents, OrderTotals, TipPercentageForm } from './components';
import { menuItems } from './data/db';
import useOrder from './hooks/useOrder';

function App() {
  const { orders, addItem, deleteItem, setTip, tip, onPlaceOrder } = useOrder();
  return (
    <>
      <header className='bg-sky-300 py-5'>
        <h1 className='text-center text-4xl font-black text-white'>
          Calculadora de propinas y Consumo
        </h1>
      </header>
      <main className='mx-auto grid max-w-7xl py-5 md:grid-cols-2 '>
        <div className='p-5'>
          <h2 className='text-4xl font-black text-center'>Menu</h2>
          <div className='mt-10 space-y-2'>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className='space-y-10 rounded-lg  p-5'>
          <h2 className='text-4xl font-black text-center'>Consumo</h2>
          {orders.length === 0 ? (
            <p className='text-center italic text-lg opacity-50'>La orden esta vacia</p>
          ) : (
            <div className=''>
              <OrderContents
                orders={orders}
                deleteItem={deleteItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals
                orders={orders}
                tip={tip}
                onPlaceOrder={onPlaceOrder}
              />
            </div>
          )}
        </div>
        
      </main>
    </>
  );
}

export default App;
