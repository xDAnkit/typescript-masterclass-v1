import {setItem, getItem} from './storage.js';

const TODO_KEY_NAMESPACE = 'todos';

/**
 * @description {Method to load todos}
 * @returns Array<Todos>
 */
export const loadTodos = () => {
  const todos = JSON.parse(getItem(TODO_KEY_NAMESPACE)) || [];
  return todos;
};

export const addTodo = title => {
  const todos = loadTodos();
  const newTodo = {
    id: new Date().getTime(),
    title,
  };

  todos.push(newTodo);
  setItem(TODO_KEY_NAMESPACE, todos);
};

export const clearTodo = key => {
  const todos = loadTodos();

  const filteredTodos = todos.filter(item => item.id === key);
  setItem(TODO_KEY_NAMESPACE, filteredTodos);
};
