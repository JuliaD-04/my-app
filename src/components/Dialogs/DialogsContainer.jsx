import React from "react";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


//приходит state полный из redux-store и мы берем свое по ключу
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

//мы отправляем или создаем новое сообщение запуская actionCreatory с помощью call-back функций
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

//2 вызова значат, что во 2-ой вызов передается результат 1-го вызова
//Идем с низу в вверх:
//сначала пришел Dialogs
//затем мы его закидываем в withAuthRedirect
//затем результат мы закидываем в connect(mapStateToProps, mapDispatchToProps),
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);












//прошлое
//let AuthRedirectComponent = withAuthRedirect(Dialogs);
// // Создаем контейнерную компоненту с помощью библиотеки react-redux
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


