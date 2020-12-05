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
      todo: 'Esta app usa RecoilJS para manejar el estado global'
    },
    {
      id: 2,
      todo: 'Usar Local Storage para persistir los datos'
    },
    {
      id: 3,
      todo: 'Permitir al usuario alternar entre un tema oscuro y claro'
    },
    {
      id: 4,
      todo: 'Permitir al usuario marcar las tareas como completadas'
    },
    {
      id: 5,
      todo: 'Permitir al usuario borrar items de la lista'
    },
    {
      id: 6,
      todo: 'Permitir al usuario borrar todos los items completados de la lista'
    },
    {
      id: 7,
      todo: 'Permitir hacer filtro de las items completados, activos y todos los items'
    },
    {
      id: 8,
      todo: 'Mostrar al usuario la cantidad de items que hacen falta por completar'
    }
  ],
});
