import clsx from 'clsx';
import { useContext, useState } from 'react';
import { TextInputProps } from '../lib/definitions';
import { validate } from '../lib/formValidation';
import { FormValidationContext } from './FormValidationProvider';

export default function TextInput({ label, name }: TextInputProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useContext(FormValidationContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleBlur() {
    setError({ ...error, [name]: !validate(name, input) });
  }

  return (
    <div className="mb-2">
      <div className="flex flex-row text-nowrap items-baseline">
        <label className="me-2 w-1/3 text-end" htmlFor="firstName">
          {label}
        </label>
        <div className="w-2/3">
          <input
            type="text"
            name={name}
            className={clsx(
              'rounded-lg p-2 w-full border',
              error[name] && 'border-red-600'
            )}
            placeholder={label}
            value={input}
            onChange={(e) => handleChange(e)}
            onBlur={() => handleBlur()}
          />
          {error[name] && (
            <div className="text-xs text-red-600">{`${label} is required`}</div>
          )}
        </div>
      </div>
    </div>
  );
}
