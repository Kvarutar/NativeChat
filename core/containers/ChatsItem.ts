import {connect} from 'react-redux';
import ChatsItem from '../../shared/ChatsItem';
import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import { deleteChat } from '../actions';
import { ChatsItemProps } from '../types';

const mapStateToProps = (state: ChatsItemProps) => ({
    login: state.login
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    deleteChat: bindActionCreators(deleteChat, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatsItem);