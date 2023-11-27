import React from 'react'
import Rating from '../../utils/Rating';
import { ReviewCardInterface } from '@/app/interfaces/Interfaces';

const ReviewCard = ({id, rating, review, learner}: ReviewCardInterface ) => {
  return (
    <div className='bg-white p-4 rounded-lg flex flex-col gap-2'>
        <Rating rating={rating} spaced/>
        <p>{review}</p>
        <p className='italic font-medium'>{learner}</p>
    </div>
  )
}

export default ReviewCard