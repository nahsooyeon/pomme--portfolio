"use client";

import { ChangeEvent, FocusEvent, TextareaHTMLAttributes, forwardRef, useState } from "react";

import { calculateBytes } from "@/utils";
import { cn } from "@/utils/tailwind";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxByte?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, maxByte, ...props }, ref) => {
  const [byte, setByte] = useState<number>(0);
  const [maxLength, setMaxLength] = useState<number | undefined>(props.maxLength || undefined);

  const commonCalculateBytes = (value: string) => {
    const nowByte = calculateBytes(value);
    if (maxByte && nowByte > maxByte) setMaxLength(value.length - 1);
    setByte(nowByte);
  };

  const onInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    commonCalculateBytes(e.currentTarget.value);
    props.onInput?.(e);
  };

  const onFocus = (e: FocusEvent<HTMLTextAreaElement>) => {
    commonCalculateBytes(e.currentTarget.value);
    props.onFocus?.(e);
  };

  return (
    <div className={cn("relative z-0 mb-5 flex-1 px-3 py-2", className)}>
      <textarea
        ref={ref}
        className="peer size-full resize-none appearance-none bg-transparent text-[14px] placeholder:text-gray-300 disabled:text-gray-600"
        {...props}
        onInput={onInput}
        onFocus={onFocus}
        maxLength={maxLength}
      />
      <div
        className={cn(
          "absolute inset-0 -z-10 rounded-[8px] border border-gray-500 bg-white",
          "peer-hover:border-gray-600 peer-hover:bg-gray-200",
          "peer-focus:border-blue-700 peer-focus:bg-white"
        )}
      />
      <span className="absolute -bottom-5 right-0 text-[12px] text-gray-900">
        {byte}/{maxByte} Bytes
      </span>
    </div>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
