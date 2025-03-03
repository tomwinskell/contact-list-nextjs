import clsx from 'clsx';
type TextInputProps = {
  label: string;
  name: string;
  valid: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export default function TextInput({ label, name, valid, value, handleChange }: TextInputProps) {
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
              !valid && 'border-red-600'
            )}
            placeholder={label}
            value={value}
            onChange={e => handleChange(e)}
          />
          {valid || (
            <div className="text-xs text-red-600">{`${label} is required`}</div>
          )}
        </div>
      </div>
    </div>
  );
}
