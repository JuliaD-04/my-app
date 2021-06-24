const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Masha'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 4, message: 'Yo'},
    ]

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            //мы берем предыдущее значение в newMessageBody
            let body = action.newMessageBody;
            return {
                ...state,
                //копируем message и добавляем новое сообщение
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}
//action creatory (связаны с изменением в state???)
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;
