import { fetchCount } from './counterAPI'
import {createAction,createAsyncThunk} from '@reduxjs/toolkit'

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const incrementByAmount = createAction('incrementByAmount')

//Async
export const incrementAsync = createAsyncThunk('incrementAsync', async (amount) => {
  const response = await fetchCount(amount);
  return response.data;
})

export const incrementIfOdd = createAsyncThunk('incrementIfOdd', async (amount,thunkApi) => {
  const { getState ,dispatch} = thunkApi;
  const currentValue = getState().value;
  if (currentValue % 2 === 1) {
  dispatch(incrementByAmount(amount));
  }
}
)
// hemos mantenido este thunk escrito a mano para mostrar cómo se puede escribir y puede conteneer logica asincrona y sincrona
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//     const currentValue = getState().value;
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   }