import * as actions from '../actions/actions.js'
import { connect } from 'react-redux';
import Stats from '../components/Stats.js';

const mapStateToProps = state => ({
  reacteerState: state
});

const mapDispatchToProps = (dispatch) => ({
  incIndex: () => { dispatch(actions.incIndex()) },
  resetIndex: () => {dispatch(actions.resetIndex())},
  setSections: () => { dispatch(actions.setSections()) },
  setUrls: () => { dispatch(actions.setUrlEntries()) },
});

export default connect(mapStateToProps,mapDispatchToProps)(Stats);
