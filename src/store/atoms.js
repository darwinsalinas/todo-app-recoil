import { atom } from "recoil";

export const draftTodoState = atom({
  key: "draftTodoState",
  default: "",
});

export const todosState = atom({
  key: "todosState",
  default: [
    {
      id: 1,
      todo: 'Ponerle los estilos a la lista de elementos'
    },
    {
      id: 2,
      todo: 'Usar Local Storage para persistir los datos'
    }
  ],
});
