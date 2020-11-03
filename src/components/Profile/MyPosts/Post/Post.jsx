import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_1280.jpg' />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;