function TaskCard({ children }) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-5 shadow lg:py-10">
      {children}
    </div>
  );
}

export default TaskCard;
