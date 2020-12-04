import { atom } from "recoil";

export const draftTodoState = atom({
  key: "draftTodoState",
  default: "mi todo por defecto",
});

export const todosState = atom({
  key: "todosState",
  default: [

  ],
});
