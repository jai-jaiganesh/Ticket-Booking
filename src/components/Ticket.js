import React, { useState } from 'react'
import clsx from 'clsx'
import ShowCase from './Showcase'

const movies = [
    {
      name: 'Beast',
      price: 120,
      occupied: [],
    },
    {
      name: 'Valimai',
      price: 120,
      occupied: [],
    },
    {
      name: 'Jai Bhim',
      price: 130,
      occupied: [],
    },
    {
      name: 'Hey ram',
      price: 150,
      occupied: [],
    },
  ]
  
  const seats = Array.from({ length: 8 * 8 }, (_, i) => i)
  
const Ticket = () => {
    const [selectedMovie, setSelectedMovie] = useState(movies[0])
    const [selectedSeats, setSelectedSeats] = useState([])
  return (
    <div>
        <Movies
         movie={selectedMovie}
         onChange={movie => {
           setSelectedSeats([])
           setSelectedMovie(movie)
         }}
       />
       <ShowCase />
      <Cinema
         movie={selectedMovie}
         selectedSeats={selectedSeats}
         onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}      
       />
 <p className="info">
    You have selected <span className="count">{selectedSeats.length}</span>{' '}
    seats for the price of{' '}
    <span className="total">
      {selectedSeats.length * selectedMovie.price}
    </span>
  </p>
    <button onClick={() => {setSelectedMovie({...selectedMovie, occupied: [...selectedSeats]}); setSelectedSeats([])}}>Book</button> 
      </div> 
  )
}
function Movies({ movie, onChange }) {
  
    return (
      
      <div className="Movies">
        <label htmlFor="movie">Select a movie</label>
        <select
          id="movie"
          value={movie.name}
          onChange={e => {
            onChange(movies.find(movie => movie.name === e.target.value))
          }}
        >
          {movies.map(movie => (
            <option key={movie.name} value={movie.name}>
              {movie.name} (Rs.{movie.price})
            </option>
          ))}
        </select>
      </div>
    )
  }
  
  
  
  function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
    const tempMovieIndex = movies.findIndex(m => m.name === movie.name)
    movies[tempMovieIndex].occupied = [...movies[tempMovieIndex].occupied, ...movie.occupied]
    movie.occupied = movies[tempMovieIndex].occupied
 
    function handleSelectedState(seat) {
      const isSelected = selectedSeats.includes(seat)
      if (isSelected) {
        onSelectedSeatsChange(
          selectedSeats.filter(selectedSeat => selectedSeat !== seat),
        )
      } else {
        onSelectedSeatsChange([...selectedSeats, seat])
      }
    }
  
    return (
      <div className="Cinema">
  
        <div className="seats">
          {seats.map(seat => {
            const isSelected = selectedSeats.includes(seat)
            const isOccupied = movie.occupied.includes(seat)
            return (
              <div>
              <span
                tabIndex="0"
                key={seat}
                className={clsx(
                  'seat',
                  isSelected && 'selected',
                  isOccupied && 'occupied',
                )}
                onClick={isOccupied ? null : () => handleSelectedState(seat)}
              />
 </div>
            )
 
          })}
        </div>
 
      </div>
    )
  }
  

export default Ticket