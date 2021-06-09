import React, {useState} from 'react';
import "./styles/MessageSender.css";
import {Avatar} from "@material-ui/core";

const MessageSender = () => {

    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src='https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg' />

                <form action="">
                    <input type="text" className='messageSender__input' placeholder="What's on your mind?" value={input} onChange={(e) => setInput(e.target.value)} />
                    <input type="file" className='messageSender__fileSelector' onChange={handleChange} />
                    <button onClick={handleSubmit} type='submit' >Hidden Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MessageSender;
