import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

//можно обернуть Dialogs в другую компоненту, или использовать render с анонимной функцией
let someComponent = () => <Dialogs />


const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={ someComponent }/>*/}
                    <Route path='/dialogs'
                           render={ () => <Dialogs store={props.store} /> }/>

                           <Route path='/profile' render={ () =>
                               <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch} /> }/>

                    <Route path='/news' render={ () => <News /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
