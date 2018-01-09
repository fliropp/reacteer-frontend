import * as actions from '../actions/actions.js'
import { connect } from 'react-redux';
import Screenshot from "../components/Screenshots.js";

const mapStateToProps = state => ({
  reacteerState: state
});

const mapDispatchToProps = (dispatch) => ({
  incIndex: () => { dispatch(actions.incIndex()) },
  resetIndex: () => {dispatch(actions.resetIndex())},
  setSections: () => { dispatch(actions.setSections()) },
  setUrls: () => {dispatch(actions.setUrlEntries()) },
  fuff: (current_section) => {dispatch(actions.fetchUrlEntries(current_section)) },
  slhd: (current_section) => {dispatch(actions.fetchLightHouseData(current_section))},
  toggleStats: () => {dispatch(actions.toggleSts())},
});

export default connect(mapStateToProps,mapDispatchToProps)(Screenshot);
