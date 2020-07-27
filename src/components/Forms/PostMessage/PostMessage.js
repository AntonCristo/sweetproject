import React,{useState,useEffect} from 'react';
import classes from './postmessage.module.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import Spinner from '../../UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

const message = (props) => {

    const [name,setName] = useState('');
    const [contact,setContact] = useState('');
    const [messageBody,setMessageBody] = useState('');
    const messageForm = {
        name:{
            inputType:'input',
            configs:{
                name:'name',
                type:'text',
                placeholder:'name...',
                maxLength:'20'
            },
            value:name
        },
        contact:{
            inputType:'input',
            configs:{
                name:'phone',
                type:'text',
                placeholder:'phone/email...',
                maxLength:'30'
            },
            value:contact
        },
        messageBody:{
            inputType:'textarea',
            configs:{
                placeholder:'your message...'
            },
            value:messageBody
        }

    }
    const checkSubmitButton = () => {
        if(name && contact && messageBody) return false;
        else return true;
    }
    const onNameChangedHandler = e => setName(e.target.value);
    const onContactChangedHandler = e => setContact(e.target.value);
    const onMessageChangedHandler = e => setMessageBody(e.target.value);
    const onSendMessageClicked = e => {
        e.preventDefault();
        props.sendMessage(name,contact,messageBody);
    }

    let status = null;

    if(props.isSuccessful){
        status = <Redirect exact to="/cakes/sweet" />
    }

    if(props.isErr){
        status = <span style={{fontWeight:'bold',color:'#6b1234'}} >{props.isErr}</span>
    }

    useEffect(()=>{
        console.log('[PostMessage.js] rendered...');
    });

    return (
        <div className={classes.messageform}>
            <h3>We'll get intouch as soon as possible :)</h3>
            <form onSubmit={onSendMessageClicked}  className={classes.inputform} >
                <Input 
                    changeHandler={onNameChangedHandler}
                    inputType={messageForm.name.inputType} 
                    configs={messageForm.name.configs}
                    value={messageForm.name.value}    
                    />
                <Input 
                    changeHandler={onContactChangedHandler}
                    inputType={messageForm.contact.inputType} 
                    configs={messageForm.contact.configs}
                    value={messageForm.contact.value}    
                    />
                <Input 
                    changeHandler={onMessageChangedHandler}
                    inputType={messageForm.messageBody.inputType}
                    configs={messageForm.messageBody.configs}
                    value={messageForm.messageBody.value}
                 />
                {
                    props.isLoading ?
                    <Spinner/> :
                    <Button 
                        disabled={checkSubmitButton()}
                        clicked={()=>{}} 
                        contained>
                        SEND
                    </Button>
                }
                {status}
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (name,contact,messageBody) => dispatch(actions.sendMessage(name,contact,messageBody)),
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.sendMessages.loading,
        isSuccessful: state.sendMessages.newPostId,
        isErr: state.sendMessages.err
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(message);