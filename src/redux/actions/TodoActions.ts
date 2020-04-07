import {
  ADDTODO,
  TOGGLETODO,
  DELETETODO,
  RESETTODO,
  SETDATE,
  CHECKDATE,
} from './types';

export const addTodo = (payload: any) => {
  return {
    type: ADDTODO,
    payload,
  };
};

export const toggleTodo = (payload: any) => {
  return {
    type: TOGGLETODO,
    payload,
  };
};

export const deleteTodo = (payload: any) => {
  return {
    type: DELETETODO,
    payload,
  };
};

export const resetTodo = () => {
  return {
    type: RESETTODO,
  };
};

export const setDate = (payload: any) => {
  return {
    type: SETDATE,
    payload,
  };
};

export const checkDate = (payload: any) => {
  return {
    type: CHECKDATE,
    payload,
  };
};
