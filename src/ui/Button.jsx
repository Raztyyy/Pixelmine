import { Link } from "react-router-dom";

function Button({
  children,
  type = "button",
  onClick,
  variant = "default",
  size = "md",
  className = "",
  path = "",
}) {
  const baseStyles =
    "flex gap-2 group border rounded-lg text-sm text-center items-center transition-all duration-300 ease-in-out justify-center";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    // ===== EXISTING VARIANTS (DO NOT MODIFY) =====
    default: "border-gray-200 bg-transparent hover:bg-primary hover:text-white",
    primary: "bg-primary text-white border-primary hover:bg-primary/80",
    secondary: "bg-gray-100 text-black border-gray-200 hover:bg-gray-200",
    outline: "bg-transparent border-gray-300 text-black hover:bg-gray-100",
    primary85:
      "bg-green-500/85 dark:hover:bg-green-600 hover:bg-green-500 border-primary text-white",
    glass:
      "hidden md:flex items-center space-x-2 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 border border-gray-200",

    // ===== MODERN VARIANTS - SOLID COLORS ONLY =====

    // Clean emerald - solid color, professional
    modernPrimary:
      "bg-emerald-600 hover:bg-emerald-700 text-white border-transparent shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 font-semibold",

    // White solid - perfect for dark backgrounds
    modernOutline:
      "bg-white hover:bg-gray-50 text-gray-900 border-2 border-white hover:border-gray-100 font-semibold shadow-lg hover:shadow-xl hover:scale-105",

    // Glass effect - subtle backdrop
    modernGlass:
      "bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg hover:bg-white/20 hover:shadow-xl hover:scale-105 font-semibold",

    // Dark emerald - solid
    modernDark:
      "bg-emerald-800 hover:bg-emerald-900 text-white border-transparent shadow-lg shadow-emerald-800/30 hover:shadow-emerald-900/40 hover:scale-105 font-semibold",

    // Bright white with emerald text
    modernLight:
      "bg-white hover:bg-emerald-50 text-emerald-900 border-transparent shadow-lg hover:shadow-xl hover:scale-105 font-semibold",

    // Teal solid
    modernTeal:
      "bg-teal-600 hover:bg-teal-700 text-white border-transparent shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 hover:scale-105 font-semibold",

    // Pure emerald solid
    modernEmerald:
      "bg-emerald-600 hover:bg-emerald-700 text-white border-transparent shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 font-semibold",

    // Ghost - minimal
    modernGhost:
      "bg-transparent text-white border-transparent hover:bg-white/10 backdrop-blur-sm font-medium",

    // Subtle outline
    modernOutlineSubtle:
      "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-semibold hover:scale-105",

    // Secondary - neutral gray
    modernSecondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 shadow-sm hover:shadow-md hover:scale-105 font-semibold",

    // ===== PILL VARIANTS (ROUNDED) =====

    modernPill:
      "bg-emerald-600 hover:bg-emerald-700 text-white border-transparent shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-105 font-semibold rounded-full",

    modernOutlinePill:
      "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm font-semibold rounded-full hover:scale-105",

    modernLightPill:
      "bg-white hover:bg-emerald-50 text-emerald-900 border-transparent shadow-lg hover:shadow-xl hover:scale-105 font-semibold rounded-full",

    modernDarkPill:
      "bg-emerald-800 hover:bg-emerald-900 text-white border-transparent shadow-lg shadow-emerald-800/30 hover:shadow-emerald-900/40 hover:scale-105 font-semibold rounded-full",

    // ===== FOR LIGHT BACKGROUNDS =====

    // Solid emerald for light sections
    modernPrimaryLight:
      "bg-emerald-600 hover:bg-emerald-700 text-white border-transparent shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:scale-105 font-semibold",

    // Emerald outline for light sections
    modernOutlineLight:
      "bg-transparent hover:bg-emerald-50 text-emerald-700 border-2 border-emerald-600 hover:border-emerald-700 font-semibold hover:shadow-md hover:scale-105",

    // Ghost for light backgrounds
    modernGhostLight:
      "bg-transparent text-emerald-700 border-transparent hover:bg-emerald-50 hover:text-emerald-800 font-medium",

    // Teal for light sections
    modernTealLight:
      "bg-teal-400 hover:bg-teal-700 text-white border-transparent shadow-lg shadow-teal-600/20 hover:shadow-teal-600/35 hover:scale-105 font-semibold",

    // ===== ALTERNATIVE SOLID COLORS =====

    // Lighter emerald
    modernEmeraldLight:
      "bg-emerald-500 hover:bg-emerald-600 text-white border-transparent shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 font-semibold",

    // Medium emerald
    modernEmeraldMedium:
      "bg-emerald-700 hover:bg-emerald-800 text-white border-transparent shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 hover:scale-105 font-semibold",
  };

  return (
    <Link
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      to={path}
    >
      {children}
    </Link>
  );
}

export default Button;
