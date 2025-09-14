import { tv } from "tailwind-variants";

function Button({ title, color, size, icon, ...props }) {
  const buttonTv = tv({
    base: "flex cursor-pointer items-center justify-center gap-1 rounded-lg  font-semibold ",
    variants: {
      color: {
        primary: "bg-[#00ADB5] text-white",
        secondary: "bg-transparent text-[#818181]",
        third: "text-[#31383E] bg-[#818181]/20",
      },
      size: {
        large: "px-12 py-2 text-sm",
        small: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button {...props} className={buttonTv({ color: color, size: size })}>
      {title}
      {icon}
    </button>
  );
}

export default Button;
