import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://sun9-10.userapi.com/c840532/v840532189/3239e/ErM4ry4CQJ4.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;