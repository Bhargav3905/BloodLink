import { X } from 'lucide-react';

const Modal = ({
  open,
  title,
  children,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-700">
          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;