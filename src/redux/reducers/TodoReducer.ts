/* eslint-disable no-case-declarations */
import {
  ADDTODO,
  RESETTODO,
  TOGGLETODO,
  DELETETODO,
  SETDATE,
  CHECKDATE,
} from '../actions/types';

const INITIAL_STATE = {
  todos: {} as any,
  totalTask: 0,
  currentDate: '',
  todosExtraData: null,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case RESETTODO:
      return {
        ...state,
        todos: { [state.currentDate]: [] },
        todosExtraData: new Date(),
        totalTask: 0,
      };
    case SETDATE:
      if (state.todos[action.payload] == null) {
        return {
          ...state,
          todos: { ...state.todos, [action.payload]: [] },
          currentDate: action.payload,
          todosExtraData: new Date(),
        };
      }
      return {
        ...state,
        currentDate: action.payload,
        todosExtraData: new Date(),
      };
    case CHECKDATE:
      if (state.todos[action.payload] == null) {
        return {
          ...state,
          todos: { ...state.todos, [action.payload]: [] },
        };
      }
      return {
        ...state,
      };
    case ADDTODO:
      const newItems =
        state.todos[action.payload.date] == null
          ? []
          : state.todos[action.payload.date];
      newItems.push(action.payload.data);
      return {
        ...state,
        todos: { ...state.todos, [action.payload.date]: newItems },
        todosExtraData: new Date(),
        totalTask: state.totalTask + 1,
      };
    case TOGGLETODO:
      const items =
        state.todos[action.payload.date] == null
          ? []
          : state.todos[action.payload.date];
      const index = items.findIndex((t: any) => t.id === action.payload.id);
      items[index].complete = !items[index].complete;

      return {
        ...state,
        todos: { ...state.todos, [action.payload.date]: items },
        todosExtraData: new Date(),
      };
    case DELETETODO:
      const todoItems =
        state.todos[action.payload.date] == null
          ? []
          : state.todos[action.payload.date];
      const deleteIndex = todoItems.findIndex(
        (t: any) => t.id === action.payload.id,
      );
      todoItems.splice(deleteIndex, 1);

      return {
        ...state,
        todos: { ...state.todos, [action.payload.date]: todoItems },
        todosExtraData: new Date(),
        totalTask: state.totalTask - 1,
      };
    default:
      return state;
  }
};
