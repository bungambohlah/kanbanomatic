import React, { PropsWithChildren } from 'react';

type InputProps = PropsWithChildren<{
  id: string;
  name: string;
  title?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}>;

export default function Input({
  id,
  title,
  type = 'text',
  className,
  ...props
}: InputProps): JSX.Element {
  return (
    <>
      {title && (
        <label
          htmlFor={id}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
          {title}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-fuchsia-500 focus:ring-fuchsia-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-fuchsia-500 dark:focus:ring-fuchsia-500 ${
          className ?? ''
        }`}
        {...props}
      />
    </>
  );
}
