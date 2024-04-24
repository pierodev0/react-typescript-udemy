import { useState } from 'react';
import { categories } from '../data/categories';
import { Activity } from '../types';

const Form = () => {
  const initialForm: Activity = {
    category: 1,
    name: '',
    calories: 0,
  };
  const [formValues, setFormValues] = useState<Activity>(initialForm);

  const handleFormValues = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, value } = e.target;

    const isNumberField = ['category', 'calories'].includes(id);
    setFormValues({
      ...formValues,
      [id]: isNumberField ? +value : value,
    });
  };

  function isValidActivity() {
    const { name, calories } = formValues;
    return name.trim().length !== 0 && calories > 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log("asdasd");
      
  }
  return (
    <form className='shaddow space-y-5 rounded-lg bg-white p-10' onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 gap-3'>
        <label
          htmlFor='category'
          className='font-bold'
        >
          Categoria
        </label>
        <select
          id='category'
          className='w-full rounded-lg border border-slate-200 p-2'
          value={formValues.category}
          onChange={handleFormValues}
        >
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className='grid grid-cols-1 gap-3'>
        <label
          htmlFor='name'
          className='font-bold'
        >
          Actividad
        </label>
        <input
          type='text'
          id='name'
          className='rounded-lg border border-slate-300 p-2'
          placeholder='Ej. Comida, Jugo de Naranja, Ensalada, Pesas, Bicicleta'
          value={formValues.name}
          onChange={handleFormValues}
        />
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <label
          htmlFor='calories'
          className='font-bold'
        >
          Calorias
        </label>
        <input
          type='number'
          id='calories'
          className='rounded-lg border border-slate-300 p-2'
          placeholder='Ej. 300 o 500'
          value={formValues.calories}
          onChange={handleFormValues}
        />
      </div>
      <input
        type='submit'
        className='w-full bg-black p-3 font-bold uppercase text-white transition enabled:hover:cursor-pointer enabled:hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50'
        value={formValues.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
        disabled={!isValidActivity()}
      />
    </form>
  );
};

export default Form;
