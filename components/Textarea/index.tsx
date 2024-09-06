"use client";

import { ChangeEvent, FocusEvent, TextareaHTMLAttributes, forwardRef, useState } from "react";

import { calculateBytes } from "@/utils";
import { cn } from "@/utils/tailwind";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxByte?: number;
  label?: React.ReactNode;
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
    <div className={cn("flex flex-col gap-1")}>
      {props.label && (
        <div className="flex h-[18px] w-25 shrink-0 items-center text-[14px] text-primary-800"> {props.label}</div>
      )}
      <div className={cn("relative z-0 px-3 py-2", className)}>
        <textarea
          ref={ref}
          className="peer size-full resize-none appearance-none bg-transparent text-[14px] placeholder:text-gray-400 disabled:text-gray-600"
          {...props}
          onInput={onInput}
          onFocus={onFocus}
          maxLength={maxLength}
        />
        <div
          className={cn(
            "absolute inset-0 -z-10 rounded-[8px] border border-pink-500 bg-white",
            "peer-hover:border-pink-600 peer-hover:bg-gray-200",
            "peer-focus:border-pink-700 peer-focus:bg-white",
            " peer-focus:outline peer-focus:outline-[2.5px] peer-focus:outline-primary-400",
          )}
        />
      </div>
      <span className="text-[12px] text-gray-900">
        {byte}/{maxByte} Bytes
      </span>
    </div >
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
