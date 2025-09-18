function Input({ title, error, ...props }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-brand-dark-Blue font-semibold">{title}</label>
      <input
        {...props}
        className="font-base border-brand-light-gray bg-brand-white text-brand-dark-Blue rounded-lg border-1 px-4 py-3 text-sm outline-none"
      />
      <p className="text-brand-danger text-sm">{error?.message}</p>
    </div>
  );
}

export default Input;
