import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ModalM from './ModalMovie';
import Movie from './Movie';
// import { Card, Button } from "react-bootstrap";
function MovieList(props){
console.log(props.data);
    return(
    <>
<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
  { props.data.map((obj,i) => (  
  <Movie data={obj} key={i}  />
        ))}  
      </div>  
    </>
);
}export default MovieList;