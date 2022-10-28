import React from 'react'
import Spinner from './Spinner'

const Card = ( { dog, loading, updateDog } ) => {

    if(loading) return <h1><Spinner/></h1>
  return (
    <div className='card bounce' onClick={() => updateDog(dog.breed.id)}> 
    <img
    src={dog.image}
    alt='dog' />
    <p>

    </p>
    </div>
  )
}

export default Card
