
const initialState = {
  value: 0,
  status: 'idle',
};
export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'decrement':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'incrementByAmount':
      return {
        ...state,
        value: state.value + action.payload,
      };  
    case 'incrementAsync/pending':
      return {
        ...state,
        status: 'loading',
      };
    case 'incrementAsync/fulfilled':
      return {
        ...state,
        value: state.value + action.payload,
        status: 'idle',
      };
    default:
      return state;
  }
}



  
