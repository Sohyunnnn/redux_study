import {createStore} from 'redux';
import { createAction } from '@reduxjs/toolkit';

// 초기 상태를 스토리지에서 불러오기
const initialState = JSON.parse(localStorage.getItem('todos')) || [];


const addToDo = createAction("ADD");
const deleteToDo= createAction("DELETE");



const reducer = (state= initialState, action) =>{
  switch(action.type){
    case addToDo.type: 
      return [{text:action.payload, id: Date.now()}, ...state];
    case deleteToDo.type:
      return state.filter(toDo=> toDo.id !==action.payload);
      default:
        return state;

  }
}


const store= createStore(reducer);

export const actionCreators={
  addToDo,
  deleteToDo
}

export default store;

