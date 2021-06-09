import React from 'react';
import {Avatar} from "@material-ui/core";
import "./styles/Story.css";

const Story = ({ image, title, profileSrc}) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar src={profileSrc} className="story__avatar" />
            <h4>{title}</h4>
        </div>
    );
};

export default Story;
