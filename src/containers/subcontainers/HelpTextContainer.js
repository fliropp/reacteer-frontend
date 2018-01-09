import * as actions from '../../actions/actions.js'
import { connect } from 'react-redux';
import HelpText from '../../components/subcomponents/HelpText.js';

const mapStateToProps = state => ({
  reacteerState: state
});

const mapDispatchToProps = (dispatch) => ({
  setHelpText: (txt, metric) => {dispatch(actions.setHelpTxt(txt, metric))}
});

export default connect(mapStateToProps,mapDispatchToProps)(HelpText);
