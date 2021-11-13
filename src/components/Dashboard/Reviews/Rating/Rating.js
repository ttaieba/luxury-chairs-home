import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Rating = () => {
    const [rating, setRating] = useState(null)

    // https://polar-chamber-50247.herokuapp.com/
    // https://polar-chamber-50247.herokuapp.com/products

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}

                    />
                    < FontAwesomeIcon icon={faStar}

                        className="star"
                        color={ratingValue < rating ? "yellow" : "lightslategrey"}
                    />
                </label>
            })



            }
            <p>the rating is {rating}</p>

        </div>
    );
};

export default Rating;