import React, { useState } from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  isLoading: externalLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) => {
  const [internalLoading, setInternalLoading] = useState(false);

  const isLoading = externalLoading || internalLoading;

  const handleClick = async (e) => {
    if (isLoading || disabled) return;

    try {
      setInternalLoading(true);

      if (onClick) {
        await onClick(e);
      }
    } finally {
      setInternalLoading(false);
    }
  };

  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm gap-1.5",
    md: "px-6 py-2.5 text-base gap-2",
    lg: "px-8 py-3.5 text-lg gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 focus:ring-green-500",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:-translate-y-0.5 focus:ring-gray-500",
    outline:
      "border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white hover:-translate-y-0.5 focus:ring-green-500",
    ghost:
      "text-gray-700 hover:bg-green-50 hover:text-green-600 focus:ring-green-500",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${widthClass}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4 absolute"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}

      <span
        className={`relative z-10 inline-flex items-center gap-2 ${
          isLoading ? "opacity-0" : ""
        }`}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </span>

      <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </button>
  );
};

export default Button;
