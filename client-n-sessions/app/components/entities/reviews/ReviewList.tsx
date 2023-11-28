import { reviews } from '@/app/data'
import { Revalia } from 'next/font/google'
import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewList = () => {

  return (
    <div className='flex flex-col gap-4'>{reviews.map(review=><ReviewCard key = {review.id} {...review} />)}</div>
  )
}

export default ReviewList