const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%',
  },
];

type  TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}

const TipPercentageForm = ({setTip,tip} : TipPercentageFormProps) => {
  return (
    <div>
      <h3 className='text-2xl font-black'>Propina: </h3>
      <form action=''>
        {tipOptions.map((tipOption) => (
          <div className="flex gap-2" key={tipOption.id}>
            <label htmlFor=''>{tipOption.label}</label>
            <input
              type='radio'
              id={tipOption.id}
              name='tipOption'
              value={tipOption.value}
              checked={tipOption.value === tip}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipPercentageForm;
