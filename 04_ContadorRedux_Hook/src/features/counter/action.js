import { fetchCount } from './counterAPI'
export const increment = () => ({ type: 'increment' })
export const decrement = () => ({ type: 'decrement' })
export const incrementByAmount = (amount) => ({
  type: 'incrementByAmount',
  payload: amount
})
export const incrementAsync = (amount) => (dispatch) => {
  dispatch({ type: 'incrementAsync/pending' })
  fetchCount(amount).then((response) => {
    dispatch({ type: 'incrementAsync/fulfilled', payload: response.data })
  })
}
export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = getState().value;
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };