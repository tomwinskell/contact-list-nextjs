type TextInputProps = {
  label: string;
  name: string;
};

export default function TextInput({ label, name }: TextInputProps) {
  return (
    <div className="flex flex-row text-nowrap items-baseline">
      <label className="me-2 w-1/3 text-end" htmlFor="first_name">
        {label}
      </label>
      <input
        type="text"
        name={name}
        className="w-2/3 border rounded-lg p-2 mb-2"
      />
    </div>
  );
}
