import Input from './Input';
import Label from './Label';
import InputError from './InputError';

const FormField = ({
  label,
  required,
  error,
  className,
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <Label required={required}>
          {label}
        </Label>
      )}

      <Input {...props} />

      <InputError message={error} />
    </div>
  );
};

export default FormField;