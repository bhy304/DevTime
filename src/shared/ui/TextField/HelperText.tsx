import cn from '@/shared/lib/cn';
import { cva } from 'class-variance-authority';
import { useTextFieldContext } from './TextFieldContext';

const helperTextVariants = cva('text-caption', {
  variants: {
    status: {
      success: 'text-positive',
      error: 'text-negative',
      default: 'text-gray-500',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

const HelperText = ({ children }: { children: React.ReactNode }) => {
  const { error } = useTextFieldContext();

  return <span className={cn(helperTextVariants({ status: error ? 'error' : 'success' }))}>{children}</span>;
};

export default HelperText;
