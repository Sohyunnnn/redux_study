import {createStore} from 'redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// 초기 상태를 스토리지에서 불러오기
const initialState = JSON.parse(localStorage.getItem('todos')) || [];


const addToDo = createAction("ADD");
const deleteToDo= createAction("DELETE");



const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) => {
      return state.filter(toDo => toDo.id !== action.payload);
    });
});



const store= configureStore({reducer});

export const actionCreators={
  addToDo,
  deleteToDo
}

export default store;

