import {createStore} from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO= 'ADD_TODO';
const DELETE_TODO='DELTE_TODO';

const reducer = (state=[], action)=> {
  console.log(action);
  switch(action.type){
    case ADD_TODO: 
    return [];
    case DELETE_TODO:
      return [];
      default:
        return state;

  }
};

// const createToDo= toDo => {
//   const li = document.createElement('li');
//   li.innerText=toDo;
//   ul.appendChild(li);
// }

const store = createStore(reducer);

const onSubmit= e=> {
  e.preventDefault();
  const toDo = input.value;
  input.value='';
  store.dispatch({type: ADD_TODO, text: toDo});
  // createToDo(toDo);
};

form.addEventListener('submit',onSubmit);