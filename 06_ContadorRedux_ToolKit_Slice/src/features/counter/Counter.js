import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'


import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd
} from './counterSlice'
import styles from './Counter.module.css'

const Counter = () => {
  const [incrementAmount,setIncrementAmount] = useState(2)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.value)
  const incrementValue = Number(incrementAmount) || 0
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount( e.target.value )
          }}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(incrementValue))
          }
        >
          Añade el valor
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Añade async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Añade si es impar
        </button>
      </div>
    </div>
  )
}

export default Counter
