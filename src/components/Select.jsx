function Select({ title, error, ...props }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-semibold text-[#35383E]">{title}</label>
      <select
        {...props}
        className="font-base rounded-lg border-1 border-[#818181]/20 bg-white px-4 py-3 text-sm text-[#35383E] outline-none"
      >
        <option value="selected">Selecione</option>
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="night">Noite</option>
      </select>
      <p className="text-sm text-red-500">{error?.message}</p>
    </div>
  );
}

export default Select;
