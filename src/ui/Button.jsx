function Button({
  children,
  type = "button",
  onClick,
  variant = "default",
  size = "md",
  className = "",
}) {
  const baseStyles =
    "flex gap-2 group border rounded-lg text-sm text-center items-center me-2 mb-2 transition-all duration-300 ease-in-out";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    default: "border-gray-200 bg-transparent hover:bg-primary hover:text-white",
    primary: "bg-primary text-white border-primary hover:bg-primary/80",
    secondary: "bg-gray-100 text-black border-gray-200 hover:bg-gray-200",
    outline: "bg-transparent border-gray-300 text-black hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
