import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');

  const handleClick = (value) => {
    if (rating === value) {
      // If the same star is clicked again, reset the rating
      setRating(0);
    } else {
      // Check if the clicked star is the first half of a star
      if (value === 0.5) {
        setRating(0.5);
      } else {
        // Check if the clicked star is the last half of a star
        if (value - rating === 0.5) {
          setRating(value);
        } else {
          setRating(Math.floor(value));
        }
      }
    }
  };

  const handleHover = (value) => {
    setHover(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <div>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={starValue}
                onClick={() => handleClick(starValue)}
                onMouseEnter={() => handleHover(starValue)}
                onMouseLeave={() => handleHover(0)}
              />
              <FaStar
                className="star"
                color={
                  starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                }
              />
            </label>
          );
        })}
      </div>
      <textarea
        placeholder="Enter your comment..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={() => console.log(`Rating: ${rating}, Comment: ${comment}`)}>
        Submit
      </button>
    </div>
  );
};

export default RatingComponent;
