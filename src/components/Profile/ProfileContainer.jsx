import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import Redirect from "react-router-dom/es/Redirect";



class ProfileContainer extends React.Component {
    componentDidMount() {
        //получаем id написав в console - this.props и в match в params находим id
       let userId = this.props.match.params.userId;
       if (!userId) {
           userId = 2;
       }
       this.props.getUserProfile(userId);
    }
    render() {
        if(!this.props.isAuth) return <Redirect to="/login"/>;
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

//оборачиваем компоненту сперва компонентой для получения id
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
//затем еще раз оборачиваем для взаимодействия со store
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);