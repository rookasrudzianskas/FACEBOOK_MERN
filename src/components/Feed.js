import React from 'react';
import "./styles/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post profilePic="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" message="Youu this is working" timestamp="example one" imgName="imgName" username="Rokas" />
        </div>
    );
};

export default Feed;
