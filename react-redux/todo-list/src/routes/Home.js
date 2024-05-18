import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const Home = ({toDos, addToDo}) => {
  console.log(toDos);

  const [text, setText] = useState('');

  function onChage(e){
    setText(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    addToDo(text);
    setText('');
  }

  return (
    <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
      <input type='text' value={text} onChange={onChage}/>
      <button>Add</button>
    </form>
    <ul>
      {JSON.stringify(toDos)}
    </ul>
    </>
  )
}

function mapStateToProps(state){
  return {toDos: state}
}

function mapDispatchToProps(dispatch){
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);