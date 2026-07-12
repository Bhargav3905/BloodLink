import Modal from '../../ui/modal/Modal';
import { Button } from '../../ui/button';

const ConfirmationDialog = ({
  open,
  title,
  description,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onCancel}
    >
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;