export type InputProps = {
  primary?: boolean;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

export const Input = ({
  primary = false,
  size = 'small',
  placeholder,
  ...props
}: InputProps) => {
  let sizeClass = '';
  if (size === 'small') sizeClass = 'px-2 py-1 text-sm';
  else if (size === 'medium') sizeClass = 'px-3 py-2 text-base';
  else if (size === 'large') sizeClass = 'px-4 py-3 text-lg';

  const colorClass = primary
    ? 'border-blue-500 focus:ring-2 focus:ring-blue-500'
    : 'border-gray-300 focus:ring-2 focus:ring-gray-300';

  const baseClass = 'rounded-md border outline-none transition';

  const combinedClass = `${baseClass} ${sizeClass} ${colorClass}`;

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={combinedClass}
      {...props}
    />
  );
};
