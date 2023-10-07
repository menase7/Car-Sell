import React from 'react'
import CarCard from './CarCard'

const Search = ({ location }) => {
  const results = location.state.results;
  return (
    <div className='w-[90%] mx-auto mt-20'>
      <div className='cartItems grid max-lg:grid-cols-2 lg:grid-cols-3'>
      {results.map(result => (
            <CarCard key={result.id} data={result} />
           )) }
      </div>
    </div>
  )
}

export default Search
