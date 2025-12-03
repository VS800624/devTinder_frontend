import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {

  const feed = useSelector((store) => store.feed)
  // console.log(feed)
  const dispatch = useDispatch()

  const getFeed = async () => {
    try {
      if (feed) return
      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true})
      dispatch(addFeed(res?.data?.data))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  if(!feed) return null
  
   if (!feed || feed.length === 0) {
    return <p className='flex justify-center my-10 text-xl font-semibold'>No new user found!</p>
  }
  
  return (
    feed && (
   <div className='flex justify-center mt-14 mb-[120px] md:my-14'>
     <UserCard user = {feed[0]} />
   </div>)
  )
}

export default Feed