import {connect} from 'react-redux';
import ChatsContent from '../../shared/ChatsContent';
import { ChatsType } from '../types';

const mapStateToProps = (state: ChatsType) => {
    return {
        chats: state.chats
    }
}

export default connect(mapStateToProps)(ChatsContent);