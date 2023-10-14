import {connect} from 'react-redux';
import Messages from '../../shared/Messages';
import { MessagesProps } from '../types';
import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import { createMessage } from '../actions';

const mapStateToProps = (state: MessagesProps) => ({
    chats: state.chats,
    login: state.login,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    createMessage: bindActionCreators(createMessage, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);