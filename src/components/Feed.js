import React, {useEffect, useState} from 'react';
import "./styles/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";
import axios from "../axios";
import Pusher from 'pusher-js';

const pusher = new Pusher('0fb031a64d5b7209ef0f', {
    cluster: 'mt1'
});

const Feed = () => {

    const [profilePic, setProfilePic] = useState('');
    const [postsData, setPostsData] = useState([]);

    const syncFeed = () => {
        axios.get('/retrieve/posts').then((response) => {
            console.log(response.data);
            setPostsData(response.data);
        })
    }

    useEffect(() => {
        syncFeed();
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {postsData.map(entry => (
                <Post profilePic={entry.avatar} message={entry.text} timestamp={entry.timestamp} imgName={entry.imgName} username={entry.user} />
            ))}
        </div>
    );
};

export default Feed;
