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
        small: "rounded-lg p-2 text-sm",
        medium: "rounded-lg p-3 text-base",
        large: "rounded-lg p-4 text-lg",
      },
      theme: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
        tertiary: "bg-gray-200 text-gray-800",
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
        "inline-flex items-center justify-center",
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
          "inline-flex flex-1 items-center justify-center",
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
