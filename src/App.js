import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import Select from './Components/Select';
import getDog from './API/getDog';
import Error from './Components/Error';
import Footer from './Components/Footer';
import AppRouter from './Components/AppRouter';


const initialDog ={
  image:'',
  breed: {
    id:0,
    name:''
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(()=>{
    updateDog()
  },[]);

  const updateDog = (breedId) =>{
    setLoading(true);
    getDog(breedId)
      .then ((newDog)=> {
        setDog(newDog);
        setLoading(false);
      }) 
      .catch((error) =>{
        setError('Error en la carga')
        setLoading(false);
      })
  }
      
  return (
    <>
    <AppRouter/>
    <div className='app'>
    <div> <Select updateDog={updateDog}/>
     {error && <Error error = {error}/>}
     <Card dog={dog} updateDog={updateDog} loading= {loading}/>
     </div>
     <Footer/>
     </div>
    </>
      );
}
export default App;
