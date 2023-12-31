import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//https://movies-api-vdsp.onrender.com/getMovies
function ModalM({data,handleClose,handleShow,show}) {
async function handleAddFav(){
  console.log(data.title);
  console.log(data.overview);
  let url = `https://movies-api-vdsp.onrender.com/addMovie`;
  let dataa = {
    "title": `${data.title}`,
    "typee": `${data.overview}`,
    "year": data.release_date,
    "comm": `https://image.tmdb.org/t/p/original/${data.poster_path}`,
    // overview: data.overview,
  }
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataa)
  })
  let recivedData = await response.json();
  console.log('recivedData', recivedData);
  if(response.status === 200){
    alert('added successfuly')
  }
}


  return (
    <>
    

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}  className="card-img-top" /> 
        <Modal.Body style={{fontSize:25, fontWeight:700}}>overview : {data.overview} </Modal.Body>
        <Modal.Body style={{fontSize:25, fontWeight:700}}>release_date : {data.release_date} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddFav}>+ Add to Favourite</Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalM;