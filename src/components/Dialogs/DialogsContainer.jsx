import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


//приходит state полный из redux-store и мы берем свое по ключу
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
//мы отправляем или создаем новое сообщение запуская actionCreatory с помощью call-back функций
let mapDispatchToProps = (dispatch) =>{
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        },
        onNewMessageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
// Создаем контейнерную компоненту с помощью библиотеки react-redux
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;