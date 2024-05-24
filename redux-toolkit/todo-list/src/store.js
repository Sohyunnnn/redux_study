import {createStore} from 'redux';

// 초기 상태를 스토리지에서 불러오기
const initialState = JSON.parse(localStorage.getItem('todos')) || [];



const ADD= 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
  return{
    type: ADD,
    text
  };
};

const deleteToDo =id => {
  return{
    type: DELETE,
    id: parseInt(id)
  }
}

const reducer = (state= initialState, action) =>{
  switch(action.type){
    case ADD: 
      return [{text:action.text, id: Date.now()}, ...state];
    case DELETE:
      return state.filter(toDo=> toDo.id !==action.id);
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

