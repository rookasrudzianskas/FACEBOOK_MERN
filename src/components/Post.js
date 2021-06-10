import React from 'react';
import "./styles/Post.css";
import {Avatar} from "@material-ui/core";

const Post = ({profilePic, timestamp, message, username, imgName}) => {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />

                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>


                </div>
            </div>
        </div>
    );
};

export default Post;
