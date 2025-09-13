function Input({ title, ...props }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="font-semibold text-[#35383E]">{title}</label>
      <input
        {...props}
        className="font-base rounded-lg border-1 border-[#818181]/20 bg-white px-4 py-3 text-sm text-[#818181] outline-none"
      />
    </div>
  );
}

export default Input;
