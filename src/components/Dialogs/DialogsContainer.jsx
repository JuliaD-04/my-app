import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return <Dialogs onSendMessageClick={onSendMessageClick}
                                    onNewMessageChange={onNewMessageChange}
                                    dialogs={state.dialogsPage.dialogs}
                                    messages={state.dialogsPage.messages}
                                    newMessageBody={state.dialogsPage.newMessageBody}/>
                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;