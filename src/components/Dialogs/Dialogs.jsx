import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Masha'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 4, message: 'Yo'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}
export default Dialogs;