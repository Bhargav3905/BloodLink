import Input from './Input';
import PasswordInput from './PasswordInput';
import Select from './Select';
import Label from './Label';
import InputError from './InputError';

const FormField = ({
  label,
  type = 'text',
  error,
  required,
  register,
  name,
  options = [],
  className,
  rules,
  ...props
}) => {
  const commonProps = {
    ...(register && name ? register(name, rules || {}) : {}),
    ...props,
  };

  return (
    <div className={className}>
      {label && (
        <Label required={required}>
          {label}
        </Label>
      )}

      {type === 'password' ? (
        <PasswordInput {...commonProps} />
      ) : type === 'select' ? (
        <Select {...commonProps}>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          type={type}
          {...commonProps}
        />
      )}

      <InputError message={error?.message || error} />
    </div>
  );
};

export default FormField;