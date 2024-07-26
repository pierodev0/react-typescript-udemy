import { categories } from '../data/categories';

const Form = () => {
  return (
    <form
      action=''
      className='shaddow space-y-5 rounded-lg bg-white p-10'
    >
      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='' className='font-bold'>Categoria</label>
        <select
          className='w-full rounded-lg border border-slate-300 bg-white p-2'
          id='category'
        >
          {categories.map((category) => (
            <option
              value={category.id}
              key={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='activity' className='font-bold'>Actividad</label>
      
      </div>
    </form>
  );
};

export default Form;
