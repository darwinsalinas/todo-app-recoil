import { atom } from "recoil";

export const draftTodoState = atom({
  key: "draftTodoState",
  default: "",
});

export const todosState = atom({
  key: "todosState",
  default: [

  ],
});
