"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/utils/tailwind";

import { VariantProps, cva } from "class-variance-authority";

/* theme: primary, secondary, tertiary */
/* size: small, medium, large */
const ButtonStyle = cva(
  "inline-flex items-center border disabled:border-gray-400 disabled:bg-gray-300 disabled:text-gray-800",
  {
    variants: {
      size: {
        small: "rounded-lg max-sm:p-1 max-sm:text-xs sm:p-2 sm:text-sm ",
        medium: "rounded-lg max-sm:p-2 max-sm:text-sm sm:p-2.5 sm:text-base",
        large: "rounded-lg max-sm:p-2.5 max-sm:text-base sm:p-3 sm:text-lg",
      },
      theme: {
        primary: "bg-pink-300 text-white hover:bg-pink-500",
        secondary: "bg-pink-500 text-white ",
        tertiary: "bg-pink-200 text-pink-800",
      },
    },
    defaultVariants: {
      size: "medium",
      theme: "primary",
    },
  }
);
interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "prefix" | "suffix">,
    VariantProps<typeof ButtonStyle> {
  underline?: boolean;
  onlyStyle?: boolean;
  loading?: boolean;
}

const WithOnlyStyle = forwardRef<any, ButtonProps>((props, forwardedRef) => {
  const { size, theme } = props;
  return (
    <div
      className={cn(
        "inline-flex flex-nowrap items-center justify-center",
        ButtonStyle({
          size,
          theme,
        })
      )}
      ref={forwardedRef}>
      {props.children}
    </div>
  );
});

WithOnlyStyle.displayName = "WithOnlyStyle";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "medium", theme = "primary", onlyStyle = false, loading = false, className, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        props.onClick?.(e);
      }
    };

    if (onlyStyle) {
      return <WithOnlyStyle size={size} theme={theme} {...props} />;
    }

    return (
      <button
        className={cn(
          "inline-flex w-max flex-1 flex-nowrap items-center justify-center",
          ButtonStyle({
            size,
            theme,
          }),
          className
        )}
        onClick={e => handleClick(e)}
        ref={ref}
        {...props}>
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
