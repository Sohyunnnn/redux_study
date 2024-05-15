import React, { useState } from 'react'

const Home = () => {
  const [text, setText] = useState('');

  function onChage(e){
    setText(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    console.log(text);
    setText('');
  }

  return (
    <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
      <input type='text' value={text} onChange={onChage}/>
      <button>Add</button>
    </form>
    <ul></ul>
    </>
  )
}

export default Home