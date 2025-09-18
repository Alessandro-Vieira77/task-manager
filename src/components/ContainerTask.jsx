function ContainerTask({ children }) {
  return (
    <div className="bg-brand-white flex w-full flex-col gap-6 rounded-lg p-6 shadow">
      {children}
    </div>
  );
}

export default ContainerTask;
