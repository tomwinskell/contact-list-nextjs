import { forwardRef, useImperativeHandle, useState } from 'react';

function Modal({
  isOpen,
  onCancel,
  children,
}: {
  isOpen: boolean;
  onCancel?: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/75">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onCancel}
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
}

export type ModalHandle = {
  changeModalState: (param: boolean) => void;
  modalState: boolean;
};

interface Props {
  onYes: () => void;
  onCancel: () => void;
  message: string;
}

const AlertModal = forwardRef<ModalHandle, Props>((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    changeModalState: (param: boolean) => {
      setOpen(param);
    },
    modalState: open,
  }));

  return (
    <Modal isOpen={open} onCancel={props.onCancel}>
      <h2 className="text-lg font-bold">Alert</h2>
      <p className="text-gray-700">{props.message}</p>
      <div className="flex flex-row justify-between">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
          onClick={props.onYes}
        >
          Yes
        </button>
        <button
          className="mt-4 px-4 py-2 bg-red-400 text-white font-semibold rounded-lg"
          onClick={props.onCancel}
        >
          No
        </button>
      </div>
    </Modal>
  );
});

AlertModal.displayName = 'Child';

export default AlertModal;
