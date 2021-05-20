import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    //Принимаем props из state (забираем у контейнерной компоненты) и
    //формируем страницу диалога
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;

    //Call-back функции
    //функция отправки сообщения и запускается здесь!
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    //функция передачи самого текста сообщения и запускается здесь!
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    }

    //Разметка на странице диалогов
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
                                  onChange={onNewMessageChange}>
                        </textarea>
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