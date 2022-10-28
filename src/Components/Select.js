import React, { useState, useEffect } from 'react';
import getBreeds from '../API/getBreeds';
import Error from './Error';

const initialBreeds = [
    {
        id: 0,
        name: '',
    },
    {
        id: 0,
        name: '',
    },
]

const Select = ( { updateDog } ) => {
    const [breeds, setBreeds] = useState([initialBreeds]);
    const [error, setError] = useState(null);

    useEffect(()=> {
        updateBreeds();
    },[])

    const updateBreeds = () => {
        getBreeds()
            .then((newBreeds)=>{
                setBreeds(newBreeds);
            })
            .catch((error)=> {
                console.log(error);
                setError('error al cargar las razas')
            })
    }
    return (
        <>
        <div>
         <select onChange={(e)=> updateDog(e.target.value)}>
            {breeds.map((breed) => (
                <option value={breed.id} key={breed.id}>
                    {breed.name}
                </option>
                ))}
            </select>
        </div>

        {error && <Error error ={error}/>}
        
        </>
    )
}

export default Select
