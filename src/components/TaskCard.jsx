function TaskCard({ children }) {
  return (
    <div className="bg-brand-white flex w-full flex-col items-center justify-center rounded-lg p-5 shadow lg:py-10">
      {children}
    </div>
  );
}

export default TaskCard;
