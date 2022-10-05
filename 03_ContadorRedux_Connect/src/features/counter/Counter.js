import React from 'react'
import { connect } from 'react-redux'


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



  render() {
    const { value } = this.props
    const count = value
    const incrementValue = Number(this.state.incrementAmount) || 0
    return (
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label='Decrement value'
            onClick={() => this.props.decrement(decrement())}
          >
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label='Increment value'
            onClick={() => this.props.increment(increment())}
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
            onClick={() => this.props.incrementByAmount(incrementByAmount(incrementValue))}
          >
            Añade el valor
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => this.props.incrementAsync(incrementValue)}
          >
            Añade async
          </button>
          <button
            className={styles.button}
            onClick={() => this.props.incrementIfOdd(incrementValue)}
          >
            Añade si es impar
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

const mapStateToDispatch = (dispatch) => {

  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount) => dispatch(incrementByAmount(amount.payload)),
    incrementAsync :(amount) => dispatch(incrementAsync(amount)),
    incrementIfOdd: (amount) => dispatch(incrementIfOdd(amount)),


  }
}


    
export default connect(
  mapStateToProps,
  mapStateToDispatch
  )(Counter)

