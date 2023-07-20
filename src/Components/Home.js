import React,{useEffect, useState} from 'react'
import MovieList from './MovieList';
import FavMov from './FavList';
import Nbar from './Navbar';
// import ModalM from './ModalMovie';
function Home() {
    const [data, setData] = useState([]);
    async function getAllReceipes(){
        const response = await fetch(`${process.env.REACT_APP_KEY}/trending`);
        const mov = await response.json();

        // const dataWithComment = mov.map(item => ({
        //   ...item,
        //   comment: "Some comment value", // Add your desired comment value here
        // }));

       setData(mov);
    }
  
    //   addProperty();
    useEffect(()=>{
        getAllReceipes();
        // addProperty();
  
    },[]);

//    console.log(data);
    return (<>

<Nbar />

{/* <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around'}}> */}
  {/* { data.map((obj, i) => (   */}
         <MovieList data={data}  />
      {/*   ))}   */}
       {/* </div>   */}

  {/* <button onClick={}>asd</button> */}
        </>);
}
export default Home;