function Input({ title, error, ...props }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-[#35383E]">{title}</label>
      <input
        {...props}
        className="font-base rounded-lg border-1 border-[#818181]/20 bg-white px-4 py-3 text-sm text-[#818181] outline-none"
      />
      <p className="text-sm text-red-500">{error?.message}</p>
    </div>
  );
}

export default Input;
