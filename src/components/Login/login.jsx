import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*у каждого объекта есть свойство - это name*/}
                <Field placeholder={"login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
//как бы оборачиваем нашу форму типо hocom, который создает контейнерную компоненту над нашей компонентой
const LoginReduxForm = reduxForm ({
    //каждая формочка имеет уникальное строковое имя, так мы понимаем какую форму использовать
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
//если мы экспортируем по default, то мы можем импортироват под любым именем
export default Login;