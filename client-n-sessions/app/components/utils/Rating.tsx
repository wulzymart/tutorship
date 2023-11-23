"use client"
import StarRatings from "react-star-ratings"

const Rating = ({rating}: {rating: number}) => {
    return (<div className=" flex gap-4">
    <StarRatings
      starRatedColor="yellow"
      rating={rating}
      starDimension="18px"
      starSpacing="5px"
    />
    <p>{rating}</p>
  </div>)
}
export default Rating