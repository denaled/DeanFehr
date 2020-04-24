//import {startTimer,stopTimer,resetTimer } from './actions'
import {STOP_TIMER, RESET_TIMER} from './actions'

const initialState = {
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined
  };
  
  function reducer(state = initialState, action) {
      console.log(action.type)
    switch (action.type) {
      case "RESET_TIMER":
        return {
          ...state,
          baseTime: 0,
          startedAt: state.startedAt ? action.now : undefined,
          stoppedAt: state.stoppedAt ? action.now : undefined
        };
      case "START_TIMER":
        return {
          ...state,
          baseTime: action.baseTime,
          startedAt: action.now,
          stoppedAt: undefined
        };
      case "STOP_TIMER":
        return {
          ...state,
          stoppedAt: action.now
        }
      default:
        return state;
    }
  }
  
  export default reducer;