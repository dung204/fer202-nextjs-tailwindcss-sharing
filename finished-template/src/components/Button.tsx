import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`border-2 border-solid border-black bg-black rounded-lg text-white px-4 py-2 transition-all hover:bg-white hover:text-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
