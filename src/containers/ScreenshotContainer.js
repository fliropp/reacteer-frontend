import * as actions from '../actions/actions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Screenshot from "../components/Screenshots.js";
import store from "../reducers/roundRobin.js";

const mapStateToProps = state => ({
  reacteerState: state
});

const mapDispatchToProps = (dispatch) => ({
  incIndex: () => { dispatch(actions.incIndex()) },
  resetIndex: () => {dispatch(actions.resetIndex())},
  setSections: () => { dispatch(actions.setSections()) },
  setUrls: () => { dispatch(actions.setUrlEntries()) },
  fuff: (path) => {dispatch(actions.fetchUrlEntries(path)) },
});

export default connect(mapStateToProps,mapDispatchToProps)(Screenshot);
