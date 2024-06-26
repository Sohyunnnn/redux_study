import React from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({text, onBtnClick, id}) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} 
      </Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps){
  console.log('ownProps:', ownProps);
  return{
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null,mapDispatchToProps) (ToDo);