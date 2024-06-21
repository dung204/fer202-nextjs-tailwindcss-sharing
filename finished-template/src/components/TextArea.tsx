'use client';

import { ComponentProps, useEffect, useRef, useState } from 'react';

type TextAreaProps = ComponentProps<'textarea'>;

export default function TextArea({ className, ...props }: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAutoResize = () => {
    textareaRef.current!.style.height = 'auto';
    textareaRef.current!.style.height = `${textareaRef.current!.scrollHeight}px`;
  };

  return (
    <textarea
      ref={textareaRef}
      className={`w-full resize-none overflow-y-hidden focus:outline-none ${className}`}
      rows={1}
      {...props}
      onChange={handleAutoResize}
    />
  );
}
