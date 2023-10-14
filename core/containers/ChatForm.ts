import {connect} from 'react-redux';
import ChatForm from '../../shared/ChatForm';
import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import {createChat} from "../actions";
import { ChatFormProps } from '../types';

const mapStateToProps = (state: ChatFormProps) => ({
    login: state.login
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    createChat: bindActionCreators(createChat, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);