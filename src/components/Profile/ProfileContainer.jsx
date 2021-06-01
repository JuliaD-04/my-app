import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import withRouter from "react-router-dom/es/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        //получаем id написав в console - this.props и в match в params находим id
       let userId = this.props.match.params.userId;
       if (!userId) {
           userId = 16482;
       }
       this.props.getUserProfile(userId);
       this.props.getStatus(userId);
    }
    render() {
        return (
           <Profile {...this.props} profile={this.props.profile} status={(this.props.status)}
                    updateStatus={this.props.updateStatus}/>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);










//прошлое
// //оборачиваем компоненту сперва компонентой для получения id
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// //затем еще раз оборачиваем для взаимодействия со store
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);