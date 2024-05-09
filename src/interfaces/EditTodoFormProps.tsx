export interface EditTodoFormProps {
  editTodo: (newValue: string, taskId: string) => void;
  task: {
      id: string;
      task: string;
      completed: boolean;
      isEditing: boolean;
  };
}
