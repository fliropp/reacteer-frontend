import * as actions from '../actions/actions.js'
import { connect } from 'react-redux';
import HelpText from '../components/subcomponents/HelpText.js';

const mapStateToProps = state => ({
  reacteerState: state
});

const mapDispatchToProps = (dispatch) => ({
  setHelpText: (txt) => {dispatch(actions.setHelpTxt(txt))}
});

export default connect(mapStateToProps,mapDispatchToProps)(HelpText);
