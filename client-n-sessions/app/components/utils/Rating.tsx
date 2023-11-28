"use client"
import StarRatings from "react-star-ratings"

const Rating = ({rating, spaced}: {rating: number, spaced?: boolean}) => {
    return (<div className={`flex ${spaced ? "justify-between": "gap-4"}`}>
    <StarRatings
      starRatedColor="yellow"
      rating={rating}
      starDimension="18px"
      starSpacing="5px"
    />
    <p>{rating}/5</p>
  </div>)
}
export default Rating