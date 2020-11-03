import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://sun9-10.userapi.com/c840532/v840532189/3239e/ErM4ry4CQJ4.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div className= {s.posts}>
                    <div className= {s.item}>
                        post 1
                </div>
                    <div className= {s.item}>
                        post 2
                </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;