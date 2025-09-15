export const mutationKey = {
  addTask: () => ["addTask"],
  updateTask: id => ["updateTask", id],
  deleteTask: () => ["deleteTask"],
  deleteTaskAll: () => ["deleteTaskAll"],
};
