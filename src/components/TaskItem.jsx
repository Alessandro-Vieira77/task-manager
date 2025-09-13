function TaskItem() {
  return (
    <div className="w-full rounded-lg bg-[#818181]/20 p-3 text-sm">
      <div className="flex items-center gap-2">
        <label className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-[#818181]">
          <input
            type="checkbox"
            checked={true}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          <span className="text-2xl"></span>
        </label>
        <p className="text-sm font-medium text-[#818181]">aprendendo React</p>
      </div>
    </div>
  );
}

export default TaskItem;
