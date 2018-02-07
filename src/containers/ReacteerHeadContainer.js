import * as actions from '../actions/actions.js'
import { connect } from 'react-redux';
import ReacteerHead from "../components/ReacteerHead.js";

const mapStateToProps = state => ({
  reacteerState: state
});

const mapDispatchToProps = (dispatch) => ({
  toggleStats: () => {dispatch(actions.toggleSts())},
  jump2: (idx) => {dispatch(actions.setIndex(idx))},
});

export default connect(mapStateToProps,mapDispatchToProps)(ReacteerHead);
