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
        small: "p-2 text-sm",
        medium: "p-3 text-base",
        large: "p-4 text-lg",
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
        "inline-flex items-center",
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
  ({ size = "medium", theme = "primary", onlyStyle = false, loading = false, ...props }, ref) => {
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
          "inline-flex flex-1 items-center",
          ButtonStyle({
            size,
            theme,
          })
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
