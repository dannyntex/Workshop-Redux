import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

export const incrementAsync = createAsyncThunk('incrementAsync',
async (amount) => {
    const response = await fetchCount(amount)
    return response.data
})

export const incrementIfOdd = createAsyncThunk(
    'incrementIfOdd',
    async (amount) => {
        return amount
    }
)
const initialState = {
    value:0,
    status: 'idle'
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
    extraReducers:(builder) => {
        builder
        .addCase(incrementAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload;
        })
        .addCase(incrementIfOdd.fulfilled,(state, action) => {
            state.statu ="idle";
            const currentValue = state.value;
            const payload ={payload:action.payload}

            if (currentValue % 2 === 1) {
                counterSlice.caseReducers.incrementByAmount(state, payload);
            }
        })
            
    }

  });

 export const { increment, decrement,incrementByAmount}  = counterSlice.actions
 export default counterSlice.reducer
 export const selectCount = (state) => state.reducer.value;