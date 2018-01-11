import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as actions from '../actions/actions.js';
import update from 'react-addons-update';
import { composeWithDevTools } from 'redux-devtools-extension';


const getInitState = () => {
  return {
    idx:0,
    sections:['klikk', 'helse', 'motor', 'bolig', 'mote', 'mat', 'teknologi', 'egmont'],
    urlentries:[],
    lighthouseData: {},
    lhdActive:false,
    helpTxt:{},
    details:{},
    showStats:true,
  }
}

const roundRobin = (state = getInitState(), action) => {
  switch (action.type) {
    case actions.INC_INDEX:
      return {...state, idx: (state.idx + 1) % state.sections.length}
    case actions.RESET_INDEX:
      return  { ...state, idx: 0 }
    case actions.SET_SECTIONS:
      return  { ...state, sections: action.sections }
    case actions.SET_URLENTRIES:
      return  { ...state, urlentries: action.urlentries }
    case actions.SET_LIGHTHOUSE_DATA:
      return {...state, lighthouseData: action.lhd}
    case actions.SET_ERROR:
      return {...state, test: action.error}
    case actions.SET_HELP_TXT:
      return {...state, helpTxt: {[action.metric]:action.htxt}}
    case actions.DELETE_HELP_TXT:
      return {...state, helpTxt: ""}
    case actions.SET_DETAILS:
      return {...state, details: {[action.metric]:action.details}}
    case actions.DELETE_DETAILS:
      return {...state, details: ""}
    case actions.TOGGLE_STATS:
      return {...state, showStats: !state.showStats}
    default:
      return state
  }
}

let store = createStore(roundRobin, composeWithDevTools(applyMiddleware(thunk)));


export default store;
