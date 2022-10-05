import React from 'react'
import { store } from '../../app/store'

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd
} from './action'
import styles from './Counter.module.css'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      incrementAmount: 2
    }
  }
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }


  render() {
    const state = store.getState()
    const { value } = state
    const count = value
    const incrementValue = Number(this.state.incrementAmount) || 0
    return (
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label='Decrement value'
            onClick={() => store.dispatch(decrement())}
          >
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label='Increment value'
            onClick={() => store.dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label='Set increment amount'
            value={this.state.incrementAmount}
            onChange={(e) => {this.setState({incrementAmount:e.target.value})}}
          />
          <button
            className={styles.button}
            onClick={() => store.dispatch(incrementByAmount(incrementValue))}
          >
            Añade el valor
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => store.dispatch(incrementAsync(incrementValue))}
          >
            Añade async
          </button>
          <button
            className={styles.button}
            onClick={() => store.dispatch(incrementIfOdd(incrementValue))}
          >
            Añade si es impar
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
