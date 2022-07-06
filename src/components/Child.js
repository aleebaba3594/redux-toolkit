import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementByAmount } from '../features/counter/CounterSlice'

const Child = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <h1>child to test data of react tool kit button is mentioned below</h1>
      <h2>we will create decrement of 15 from this child</h2>
      <button onClick={()=>{dispatch(decrementByAmount(15))}}>decrement of 15 by payload</button>
    </div>
  )
}

export default Child
