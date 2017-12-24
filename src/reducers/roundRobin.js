import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as actions from '../actions/actions.js';

const getInitState = () => {
  return {
    idx:0,
    sections:['', 'helse', 'motor', 'bolig', 'mote', 'mat', 'teknologi'],
    urlentries:[],
    test:'waiting for meme',
    test_idx: 1
  }
}

const roundRobin = (state = getInitState(), action) => {
  switch (action.type) {
    case actions.INC_INDEX:
      return {...state, idx: state.idx + 1}
    case actions.RESET_INDEX:
      return  { ...state, idx: 0 }
    case actions.SET_SECTIONS:
      return  { ...state, sections: action.sections }
    case actions.SET_URLENTRIES:
      return  { ...state, urlentries: action.urlentries }
    case actions.SET_TEST:
      return {...state, test: action.meme}
    case actions.SET_ERROR:
      return {state, test:  action.error}
    default:
      return state
  }
}

let store = createStore(roundRobin, applyMiddleware(thunk));

export default store;
