import React, { useState } from 'react'

const StarRating = ({onRatingChange}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

  const handleRating = (ratingValue) => {
    onRatingChange(ratingValue)
    setRating(ratingValue)
  }
  return (
    <div className="flex space-x-1">
        {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1
            return (
                <svg
                key={index}
                className={`w-6 h-6 cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-300' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                onMouseLeave={() => setHover(0)}
                onMouseEnter={() => setHover(ratingValue)}
                onClick={() => handleRating(ratingValue)}
              >
                <path d="M10 15l-6 3.3 1.2-7L0 7.5l7-1L10 0l3 6.5 7 1-5.2 4.8L16 18z" />
              </svg>
            )   
        })}
    </div>
  )
}

export default StarRating