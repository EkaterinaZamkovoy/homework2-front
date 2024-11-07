import { UserType } from '../HW8';

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      // by name
      const sortedState = [...state].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return action.payload === 'up' ? sortedState : sortedState.reverse();
      // need to fix
    }
    case 'check': {
      return [
        ...state
          .filter(p => p.age >= action.payload) // Фильтрация по возрасту
          .sort((a, b) => {
            // Если возраст одинаковый, сохраняем исходный порядок
            if (b.age === a.age) {
              return state.indexOf(a) - state.indexOf(b);
            }
            // Сортируем по убыванию возраста
            return b.age - a.age;
          }), // need to fix
      ];
    }
    default:
      return state;
  }
};
