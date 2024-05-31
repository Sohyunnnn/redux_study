
import { configureStore, createSlice } from '@reduxjs/toolkit';

// 초기 상태를 스토리지에서 불러오기
const initialState = JSON.parse(localStorage.getItem('todos')) || [];



const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter(toDo => toDo.id !== action.payload);
    }
  }
});



export const {
  add,
  remove
} = toDos.actions;

export default configureStore({reducer:toDos.reducer});

