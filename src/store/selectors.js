import { selector } from "recoil";
import { todosState } from './atoms'

export const todoCountState = selector({
  key: "todoCountState",
  get: ({ get }) => {
    const todos = get(todosState);
    return todos.length;
  },
});
