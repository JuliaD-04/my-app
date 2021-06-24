import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    //Принимаем props из state (забираем у контейнерной компоненты) и
    //формируем страницу диалога
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = props.dialogsPage.newMessageBody;

    //Call-back функции
    //в values - объект
    let addNewMessage = (values) => {
        //onSendMessageClick-этот колбэк, который к нам приходит из DialogsContainer
        //функция отправки сообщения и запускается здесь!
        props.onSendMessageClick(values.newMessageBody);
    }

    //Разметка на странице диалогов
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            {/*когда форма засобмитилась она вызовет функцию addNewMessage*/}
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}

//Задача формы просто собирать данные и отправлять их в HandleSubmit
const AddMessageForm = (props) => {
    return (
        <form onSubmit ={props.handleSubmit}>
            <Field component={'textarea'} name='newMessageBody' placeholder='Enter your message' />
            <div><button>Send</button></div>
        </form>
    )
}
//Эта форма будет называться "dialogsAddMessageForm"
const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

export default Dialogs;