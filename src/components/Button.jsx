import { tv } from "tailwind-variants";

function Button({ title, color, icon, ...props }) {
  const buttonTv = tv({
    base: "flex cursor-pointer items-center justify-center gap-1 rounded-lg px-3 py-1 text-xs font-semibold ",
    variants: {
      color: {
        primary: "bg-[#00ADB5] text-white",
        secondary: "bg-transparent text-[#9A9C9F]",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  });

  return (
    <button {...props} className={buttonTv({ color: color })}>
      {title}
      {icon}
    </button>
  );
}

export default Button;
