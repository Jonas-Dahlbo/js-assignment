import React from 'react'

const ReviewBox = ({ imgRating, review, imgReviewer, Name, Position }) => {
    return (
        <div className="review-box">
            <img className="rating" src={imgRating} />
            <p>{review}</p>
            <div className="reviewer">
                <img src={imgReviewer} />
                <div>
                    <h3>{Name}</h3>
                    <p>{Position}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewBox