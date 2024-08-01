"use client";

import { InputHTMLAttributes, forwardRef, useState } from "react";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import { cn } from "@/utils/tailwind";

import { VariantProps, cva } from "class-variance-authority";

const InputStyle = cva(`group relative flex flex-1 items-center justify-between gap-2 rounded-sm px-3`, {
  variants: {
    size: {
      xs: "h-7 py-[7px]",
      sm: "h-8 py-[7px]",
      md: "h-9 py-[7px]",
      lg: "h-10 py-[9px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "size">,
    VariantProps<typeof InputStyle> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  layout?: "vertical" | "horizontal";
  isError?: boolean;
  isHint?: boolean;
  isOnlyNumber?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
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
    const [isShow, setShow] = useState<boolean>(false);

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
                "flex h-5 w-25 shrink-0 items-center text-sm",
                layout === "vertical" && "ml-0.5",
                props.disabled && ""
              )}>
              {label}
            </div>
          )}
          <div className={cn(InputStyle({ size }), "z-0 px-3", props.readOnly && "px-0.5", className)}>
            {prefix && (
              <div className={cn(props.disabled && "fill-gray-300 stroke-gray-300 text-gray-300")}>{prefix}</div>
            )}
            <input
              ref={ref}
              type={isShow ? "text" : type}
              data-error={isError}
              className={cn(
                InputStyle({ size }),
                "peer w-full appearance-none bg-transparent text-sm placeholder:text-gray-800 disabled:text-gray-600"
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
                  <div className="fill-gray-400 stroke-gray-400 stroke-0">
                    <IoEye />
                  </div>
                ) : (
                  <div className="fill-gray-400 stroke-gray-400 stroke-0">
                    <IoEyeOff />
                  </div>
                )}
              </button>
            )}

            <div
              className={cn(
                InputStyle({ size }),
                "absolute inset-0 -z-10 rounded-[6px] border border-gray-500 bg-white",
                "group-hover:border-gray-600 group-hover:bg-gray-200 peer-focus:bg-white", // Default
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
              "h-4 text-xs text-gray-200",
              layout === "vertical" ? "ml-0.5" : "ml-28",
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
