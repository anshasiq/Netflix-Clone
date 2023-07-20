import React, { useEffect, useState } from "react";
import { Card, Button, Nav } from "react-bootstrap";
import Nbar from "./Navbar"; 

function FavMov() {
    const [favMov, setfavMov] = useState([]);
    async function handleFavMov() {
      const url = `https://movies-api-vdsp.onrender.com/getMovies`;
      console.log(url);
      let response = await fetch(url);
      let recivedData = await response.json();
      // console.log(recivedData);
      setfavMov(recivedData);
    }
    useEffect(() => {
        handleFavMov();
      }, []);
      console.log(favMov);
      async function handleDelete(id){
        const url = `https://movies-api-vdsp.onrender.com/DELETE/${id}`;
        let response = await fetch(url, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          },
        });
        if(response.status === 204){
          alert('deleted successfuly')
        }
        handleFavMov();
      }
      // handleFavMov();

// console.log(favMov[0].typee);
return(
    <div style={{backgroundColor: "#b7eaed"}}>
    <Nbar />
      <h1>Favourite movies</h1>
    <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
      {favMov.map((Movie, id) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Movie.comment} />
          <Card.Body>
            <Card.Title>{Movie.title}</Card.Title>
            <Card.Text>{Movie.typee}</Card.Text>
            <Card.Text>{Movie.year}</Card.Text>
            <Button variant="primary" onClick={()=> handleDelete(Movie.id)} style={{backgroundColor: "red"}} >Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    
    
    
    </div>
); 






}
export default FavMov;
//onClick={()=> handleDelete(recipe.id)}