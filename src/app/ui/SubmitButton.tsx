import clsx from 'clsx';

export default function SubmitButton({
  disabled,
  text,
}: {
  disabled: boolean;
  text: string;
}) {
  return (
    <button
      type="submit"
      className={clsx(
        'self-end py-3 px-5 font-semibold  rounded-lg w-min text-nowrap mt-3',
        disabled
          ? 'bg-slate-300 text-slate-400 cursor-not-allowed'
          : 'text-white bg-indigo-700 cursor-pointer'
      )}
    >
      {text}
    </button>
  );
}
