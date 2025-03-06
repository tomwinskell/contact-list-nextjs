import { forwardRef, useImperativeHandle, useState } from 'react';

export type ToastHandle = {
  changeToastState: (param: boolean) => void;
  toastState: boolean;
};

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

export function ToastLogic(props: Props, ref: React.Ref<ToastHandle>) {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    changeToastState: (param: boolean) => {
      setOpen(param);
    },
    toastState: open,
  }));

  if (!open) return null;

  return (
    <div className="fixed right-5 top-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-xl shadow-indigo-700">
      <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-200 bg-green-700 rounded-lg">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      </div>
      <div className="ms-3 text-sm font-semibold">{props.children}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        onClick={props.onClose}
        aria-label="Close"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  );
}

const Toast = forwardRef<ToastHandle, Props>(ToastLogic);

export default Toast;
