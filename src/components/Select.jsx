function Select({ title, error, ...props }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-brand-dark-Blue font-semibold">{title}</label>
      <select
        {...props}
        className="font-base border-brand-text-gray/20 text-brand-dark-Blue bg-brand-white rounded-lg border-1 px-4 py-3 text-sm outline-none"
      >
        <option value="selected">Selecione</option>
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="night">Noite</option>
      </select>
      <p className="text-brand-danger text-sm">{error?.message}</p>
    </div>
  );
}

export default Select;
