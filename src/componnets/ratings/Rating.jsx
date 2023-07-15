import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({rating,numReviews}) => {
  return (
    <>
    <div className="rating">
        <span>
            {rating >= 1 ? <BsStarFill/> : rating >= 0.5 ? <BsStarHalf/> : <BsStar/>   }
        </span>
        <span>
            {rating >= 2 ? <BsStarFill/> : rating >= 1.5 ? <BsStarHalf/> : <BsStar/>   }
        </span>
        <span>
            {rating >= 3 ? <BsStarFill/> : rating >= 2.5 ? <BsStarHalf/> : <BsStar/>   }
        </span>
        <span>
            {rating >= 4 ? <BsStarFill/> : rating >= 3.5 ? <BsStarHalf/> : <BsStar/>   }
        </span>
        <span>
            {rating >= 5 ? <BsStarFill/> : rating >= 4.5 ? <BsStarHalf/> : <BsStar/>   }
        </span>
    </div>
    </>
  )
}

export default Rating