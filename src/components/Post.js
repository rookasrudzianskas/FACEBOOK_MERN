import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './styles/Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIclon from '@material-ui/icons/AccountCircle';

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
    return (
        <div className='post' >
            <div className="post__top">
                <Avatar src={profilePic} className='post__avatar' />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            {/*    image goes in here*/}
                {imgName ? (
                    <div className="post__image">
                        <img src={`/api/retrieve/images/single?name=${imgName}`} alt=""/>
                    </div>
                ) : (
                    console.log('THERE is nothing here')
                )}
            </div>



            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIclon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post;