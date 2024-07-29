"use client";

import React, { InputHTMLAttributes } from "react";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import { cn } from "@/utils/tailwind";

import { VariantProps, cva } from "class-variance-authority";

const InputVariants = cva(`group relative flex flex-1 items-center justify-between gap-2 rounded-[6px]`, {
  variants: {
    size: {
      xs2: "h-7 text-[13px] leading-[130%] tracking-normal placeholder:text-[13px]",
      xs: "h-8",
      sm: "h-9",
      md: "h-10",
      lg: "h-11",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "size">,
    VariantProps<typeof InputVariants> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  layout?: "vertical" | "horizontal";
  isError?: boolean;
  isHint?: boolean;
  isOnlyNumber?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      prefix,
      suffix,
      size,
      label,
      hint,
      layout = "vertical",
      isError = false,
      isHint = true,
      isOnlyNumber = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isShow, setShow] = React.useState<boolean>(false);

    const handleToggleShow = () => setShow(prev => !prev);
    const handleOnlyNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isOnlyNumber) e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
      props.onInput?.(e);
    };

    return (
      <div className="flex flex-col">
        <div className={cn("flex", layout === "vertical" ? "flex-col gap-1" : "flex-row items-center gap-2")}>
          {label && (
            <div
              className={cn(
                "flex h-[18px] w-25 shrink-0 items-center text-[14px]",
                layout === "vertical" && "ml-[2px]",
                props.disabled && "text-gray-900"
              )}>
              {label}
            </div>
          )}
          <div className={cn(InputVariants({ size }), "z-0 px-3", props.readOnly && "px-[2px]", className)}>
            {prefix && (
              <div className={cn(props.disabled && "fill-gray-600 stroke-gray-600 text-gray-600")}>{prefix}</div>
            )}
            <input
              ref={ref}
              type={isShow ? "text" : type}
              data-error={isError}
              className={cn(
                InputVariants({ size }),
                "peer w-full appearance-none bg-transparent text-[14px] placeholder:text-gray-900 disabled:text-gray-600"
              )}
              onInput={handleOnlyNumber}
              {...props}
            />
            {suffix && (
              <div className={cn("flex", props.disabled && "fill-gray-600 stroke-gray-600 text-gray-600")}>
                {suffix}
              </div>
            )}

            {type === "password" && (
              <button tabIndex={-1} type="button" onClick={handleToggleShow}>
                {isShow ? (
                  <div className="fill-gray-300 stroke-gray-300 stroke-0">
                    <IoEye />
                  </div>
                ) : (
                  <div className="fill-gray-300 stroke-gray-300 stroke-0">
                    <IoEyeOff />
                  </div>
                )}
              </button>
            )}

            <div
              className={cn(
                InputVariants({ size }),
                "absolute inset-0 -z-10 rounded-[6px] border border-gray-500 bg-white",
                "gorup-hover:border-gray-600 group-hover:bg-gray-200 peer-focus:bg-white", // Default
                "peer-read-only:border-none peer-read-only:bg-transparent", // Read Only
                "group-hover:peer-data-[error=false]:border-gray-600", // No Error
                "peer-data-[error=true]:border-red-500 group-hover:peer-data-[error=true]:border-red-500 group-hover:peer-data-[error=true]:bg-red-100", // Error
                "group-hover:peer-focus:peer-data-[error=false]:border-blue-700", // Focus Input border blue
                "peer-disabled:border-gray-400 peer-disabled:bg-gray-200 peer-disabled:text-gray-600 peer-disabled:group-hover:peer-data-[error=true]:bg-gray-200"
              )}
            />
          </div>
        </div>

        {isHint && (
          <div
            className={cn(
              "h-4 text-[12px] text-gray-200",
              layout === "vertical" ? "ml-[2px]" : "ml-[114px]",
              isError ? "text-red-600" : ""
            )}>
            {hint}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
