import clsx from 'clsx';
import { FormFieldProps } from '@/app/lib/types';

export function FormField({
  type,
  placeholder,
  name,
  register,
  error,
  options,
}: FormFieldProps): React.ReactNode {
  return (
    <div className="mb-2">
      <div className="flex flex-col sm:flex-row text-nowrap items-baseline">
        <label className="me-2 sm:w-1/3 sm:text-end" htmlFor="firstName">
          {placeholder}
        </label>

        <div className="w-full sm:w-2/3">
          <div className='relative'>
            <input
              type={type}
              className={clsx(
                'rounded-lg p-2 w-full border',
                error && 'border-fuchsia-600 border-2'
              )}
              placeholder={placeholder}
              {...register(name, options)}
            />
            {error && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-pink-500 h-4 w-4 rounded-lg"></div>
            )}
          </div>
          {error && <p className="text-xs text-fuchsia-600">{error.message}</p>}
        </div>
      </div>
    </div>
  );
}
