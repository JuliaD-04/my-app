import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
//мы импортируем промежуточный уровень, который мы внедряем в свой store
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


//склеиваем редьюсеры (это и есть state, отсюда и идут все props)
// мы внутри передаем объект(который состоит из ключ: значение)
// этот объект воспринимать как наш state
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
