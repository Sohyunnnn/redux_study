import {createStore} from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

// 초기 상태를 스토리지에서 불러오기
const initialState = JSON.parse(localStorage.getItem('todos')) || [];


const addToDo = createAction("ADD");
const deleteToDo= createAction("DELETE");



// const reducer = (state= initialState, action) =>{
//   switch(action.type){
//     case addToDo.type: 
//       return [{text:action.payload, id: Date.now()}, ...state];
//     case deleteToDo.type:
//       return state.filter(toDo=> toDo.id !==action.payload);
//       default:
//         return state;

//   }
// }

// const reducer = createReducer([],{
//   [addToDo] : (state, action)  => {
//     state.push({text:action.payload, id: Date.now()}); //state mutate
//   },
//   [deleteToDo] : (state, action) => 
//     state.filter(toDo=> toDo.id !==action.payload)
  
// })

const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) => {
      return state.filter(toDo => toDo.id !== action.payload);
    });
});



const store= createStore(reducer);

export const actionCreators={
  addToDo,
  deleteToDo
}

export default store;

