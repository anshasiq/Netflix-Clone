import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ModalM from './ModalMovie';
// import { Card, Button } from "react-bootstrap";
function Movie(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
    <>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${props.data.poster_path}`} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        {/* <Card.Text>{props.data.overview}</Card.Text> */}
        <Button onClick={handleShow} variant="primary"  >More Details</Button>
      </Card.Body>
      <ModalM data={props.data} handleClose={handleClose} handleShow={handleShow} show={show}/>
    </Card>

   
    </>
);
}export default Movie;