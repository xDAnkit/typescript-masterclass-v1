import {setItem, getItem} from './storage.js';
import {ITODO} from './types.js';

const TODO_KEY_NAMESPACE = 'todos';

/**
 * @description {Method to load todos}
 * @returns Array<Todos>
 */
export const loadTodos = (): ITODO[] => {
  try {
    const todoList: string | null = getItem(TODO_KEY_NAMESPACE);
    if (!todoList) {
      return [];
    }
    const todos: ITODO[] = JSON.parse(todoList);
    return todos;
  } catch (err) {
    return [];
  }
};

export const addTodo = (title: string): void => {
  const todos: ITODO[] = loadTodos();
  const newTodo: ITODO = {
    id: new Date().getTime(),
    title,
  };

  todos.push(newTodo);
  setItem(TODO_KEY_NAMESPACE, todos);
};

export const clearTodo = (key: number): void => {
  const todos: ITODO[] = loadTodos();

  const filteredTodos: ITODO[] = todos.filter((item: ITODO) => item.id === key);
  setItem(TODO_KEY_NAMESPACE, filteredTodos);
};
