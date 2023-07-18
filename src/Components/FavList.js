import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";


function FavMov() {
    const [favMov, setfavMov] = useState([]);
    async function handleFavMov() {
      const url = `//https://movies-api-vdsp.onrender.com/getMovies`;
      let response = await fetch(url);
      let recivedData = await response.json();
      setfavMov(recivedData);
    }
    useEffect(() => {
        handleFavMov();
      }, []);

      async function handleDelete(id){
        const url = `//https://movies-api-vdsp.onrender.com/DELETE/${id}`;
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


return(
    <>
      <div>
      {favMov.map((Movie, id) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Movie.poster_path} />
          <Card.Body>
            <Card.Title>{Movie.title}</Card.Title>
            <Card.Text>{Movie.overview}</Card.Text>
            <Button variant="primary" onClick={()=> handleDelete(Movie.id)} >Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    
    
    </>
); 






}
export default FavMov;
//onClick={()=> handleDelete(recipe.id)}