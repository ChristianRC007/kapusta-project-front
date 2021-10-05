import InputCounter from './InputCounter';
import SelectCounter from './SelectCounter';
import PayInput from './PayInput';

export default function InputContainer() {
  return (
        <div className='input-container'>
      <InputCounter />
      <SelectCounter />
      <PayInput />
        </div>       
  );
}