import React,{useEffect, useState} from 'react'
import MovieList from './MovieList';
import Nbar from './Navbar';
// import ModalM from './ModalMovie';
function Home() {
    const [data, setData] = useState([]);
    const [Ndata, NsetData] = useState([]);
    async function getAllReceipes(){
        // const url = process.env.REACT_APP_SERVER_URL;
        // console.log(url);
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}&language=en-US`);
        const mov = await response.json();
       setData(mov.results)
    }
    
    useEffect(()=>{
        getAllReceipes();
    },[]);

   
    return (<>

<Nbar />

<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}>
  { data.map((obj, i) => (  
         <MovieList data={obj}  key={i}/>
       ))}  
       </div>  

  
        </>);
}
export default Home;