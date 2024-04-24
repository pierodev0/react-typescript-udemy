import type { MenuItem } from '../types';

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
    className='group flex w-full justify-between bg-sky-100 rounded-md  p-3 transition hover:bg-sky-400'
    onClick={() => addItem(item)}
    >
      <p className='transition group-hover:text-white font-bold'>{item.name}</p>
      <p className='font-black text-blue-950 group-hover:text-white'>${item.price}</p>
    </button>
  );
};

export default MenuItem;
