import {connect} from 'react-redux';
import LoginForm from '../../shared/LoginForm';
import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import {login, createChat, setInitial} from "../actions";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    userLogin: bindActionCreators(login, dispatch),
    createChat: bindActionCreators(createChat, dispatch),
    setInitial: bindActionCreators(setInitial, dispatch),
})

export default connect(null, mapDispatchToProps)(LoginForm);