import React,{useState,useEffect} from 'react';
import classes from './message.module.scss';
import collapse from '../../../../assets/icons/collapse.svg';
import uncollapse from '../../../../assets/icons/uncollapse.svg';
import deleteIcon from '../../../../assets/icons/delete.svg';

const message = (props) => {

    const [collapseMessage,setCollapseMessage] = useState(false);

    const toggleCollapseHandler = () => {
        setCollapseMessage(!collapseMessage);
    }

    useEffect(()=>{
        console.log('[Message.js] rendered...');
    });

    return (
        <React.Fragment>
            <div className={classes.message}>
                <div className={classes.msgInfo}>
                    <span>{props.sender}</span>
                    <span>{props.contact}</span>
                    <span>{props.timestamp}</span>
                </div>
                <div onClick={toggleCollapseHandler} className={classes.collapseicon} >
                    { collapseMessage ? <img src={uncollapse}  /> : <img src={collapse}  />}
                </div>
            </div>
            {
                collapseMessage ?
                <div className={classes.collapsedmessage}>
                    <p>{props.message}</p>
                    <div 
                        style={{display:'flex',justifyContent:'center',cursor:'pointer'}} 
                        onClick={()=>props.onDelete(props.uid)} 
                    >
                        <img src={deleteIcon} />
                    </div>
                </div> :
                null
            }
        </React.Fragment>
    );
}

export default message;