import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



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
        return (
           <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

//оборачиваем компоненту сперва компонентой для получения id
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//затем еще раз оборачиваем для взаимодействия со store
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);