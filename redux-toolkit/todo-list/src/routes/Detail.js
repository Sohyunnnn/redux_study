import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
const myId = useParams().id;
const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

return (
<>
  <h1>
    {toDo?.text}</h1>
  <h5>
    Created at: {toDo?.id}
  </h5>
</>
);
}

function mapStateToProps(state) {
return { toDos: state };
}





export default connect(mapStateToProps) (Detail)

// import React from 'react';
// import { connect } from 'react-redux';

// const Detail = ({toDo}) => {
//   return (
//     <>
//     <div>{toDo?.text}</div>
//     <div>Created at: {toDo?.id}</div>
//     </>
//   )
// }

// function mapStateToProps(state, ownProps){
//   const {
//     match: {
//       params: {id}
//     }
//   } =ownProps;
//   console.log(ownProps)
//   return{toDo: state}.find(toDo => toDo.id === parseInt(id));
// }

// export default connect(mapStateToProps) (Detail)

