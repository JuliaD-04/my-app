import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189_960_720.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_960_720.jpg',
                    followed: false,
                    fullName: 'Valera',
                    status: 'I am a boss too',
                    location: {city: 'Orel', country: 'Russia'},
                }
            ]
        )
}


    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {props.unfollow(u.id) }}>UnFollow</button>
                        : <button onClick={() => {props.follow(u.id) }}>Follow</button>}
                </div>
            </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;