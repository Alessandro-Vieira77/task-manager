function Select({ title }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="font-semibold text-[#35383E]">{title}</label>
      <select
        name={title}
        id=""
        className="font-base rounded-lg border-1 border-[#818181]/20 bg-white px-4 py-3 text-sm text-[#35383E] outline-none"
        defaultValue="selected"
      >
        <option value="selected">Selecione</option>
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="night">Noite</option>
      </select>
    </div>
  );
}

export default Select;
