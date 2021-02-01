import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.newMessageBody;


    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  placeholder='Enter your message'
                                  onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;