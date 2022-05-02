export interface Todo {
  id?: number;
  todo: string;
  is_completed: boolean;
}

export type Todos = Todo[];

export type TodoResponse = {
  status: string;
};
