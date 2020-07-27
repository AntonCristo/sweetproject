import React,{useEffect} from 'react';
import classes from './readmessages.module.scss';
import Message from './Message/Message';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import Spinner from '../../UI/Spinner/Spinner';


const readMessages = (props) => {

    let messages = <Spinner/>

    const onDeleteMessageHandler = id => {
        props.deleteMessage(id);
        setTimeout(()=>{
            props.fetchMessages();
        },500)
    }

    if(props.messagesList.length>0){
        messages = props.messagesList.map(msg => (
            <Message 
                onDelete={onDeleteMessageHandler}
                key={msg.id} 
                uid={msg.id}
                sender={msg.senderName}
                contact={msg.senderContact}
                message={msg.messageBody}
                timestamp={msg.timestamp}  />
        ));
    }

    useEffect(()=>{
        props.fetchMessages();
    },[]);

    useEffect(()=>{
        console.log('[ReadMessages.js] rendered...');
    });

    return (
        <div className={classes.readmessages}>
            <h3>INBOX</h3>
            <div className={classes.messageslist}>
                {messages}
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMessages: () => dispatch(actions.fetchMessages()),
        deleteMessage: id => dispatch(actions.deleteMessage(id))
    }
}

const mapStateToProps = state => {
    return {
        messagesList: state.fetchMessages.messages,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(readMessages);