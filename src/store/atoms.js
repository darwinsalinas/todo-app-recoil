import { atom } from "recoil";

export const draftTodoState = atom({
  key: "draftTodoState", // unique ID (with respect to other atoms/selectors)
  default: "mi todo por defecto", // default value (aka initial value)
});
