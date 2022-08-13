import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}>;

export default function Button({
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={`rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 ${
        className ?? ''
      }`}
      {...props}>
      {children}
    </button>
  );
}
