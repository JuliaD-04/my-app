import {autAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                //мы создадим в action объект (например - data) и его деструктуризируем
                //в него мы положим (id, email, login)
                //эти св-ва перезатрут свойства которые были в state
                ...action.data,
                //если пришли пользовательские данные то True
                isAuth: true
            }
        default:
            return state;
    }
}
//ActionCreator
//Со старта может придти 2 варианта: 1) ты залогинен, 2)нет
// мы здесь создаем data и закидываем туда данные
export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

//санка
export const getAuthUserData = () => (dispatch) => {
    autAPI.me().then(response => {
        //если запрос успешен, т.е. resultcode=0, значит ты залогинен!!!
        //Значит тут есть твой id, login и email
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}


export default authReducer;
