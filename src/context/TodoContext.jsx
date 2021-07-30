import React, {createContext, useContext, useReducer } from 'react';
import Todo from '../components/Todo';

export const TodoLayerContext = createContext();

export const TodoLayer = ({ initialState, reducer, children}) => (
   <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
       {children}
   </TodoLayerContext.Provider> 
);

export const useTodoLayerValue = () => useContext(TodoLayerContext);