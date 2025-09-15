import { tv } from "tailwind-variants";

function Button({ children, color, size, ...props }) {
  const buttonTv = tv({
    base: "flex cursor-pointer items-center justify-center gap-1 rounded-lg  font-semibold ",
    variants: {
      color: {
        primary: "bg-[#00ADB5] text-white",
        secondary: "bg-transparent text-[#818181]",
        third: "text-[#31383E] bg-[#818181]/20",
        danger: "bg-[#FF5959] text-white",
      },
      size: {
        large: "px-4 w-full py-2 text-sm",
        small: "w-32 py-1 text-xs",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button {...props} className={buttonTv({ color: color, size: size })}>
      {children}
    </button>
  );
}

export default Button;
