import * as actions from '../../actions/actions.js'
import { connect } from 'react-redux';
import HelpText from '../../components/subcomponents/HelpText.js';

const mapStateToProps = state => ({
  reacteerState: state
});

const mapDispatchToProps = (dispatch) => ({
  setHelpText: (txt, metric) => {dispatch(actions.setHelpTxt(txt, metric))},
  deleteHelpText: (metric) => {dispatch(actions.deleteHelpTxt(metric))},
  setDetails: (details, metric) => {dispatch(actions.setDetails(details, metric))},
  deleteDetails: (metric) => {dispatch(actions.deleteDetails(metric))},

});

export default connect(mapStateToProps,mapDispatchToProps)(HelpText);
