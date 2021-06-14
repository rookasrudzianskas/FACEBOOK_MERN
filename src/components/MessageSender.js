import React, {useState} from 'react';
import "./styles/MessageSender.css";
import {Avatar} from "@material-ui/core";
import { Input } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from "../StateProvider";

const MessageSender = () => {

    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [{user}, dispatch] = useStateValue();

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(image){
            const imgForm = new FormData();
            imgForm.append('file', image, image.name);

            axios.post('/upload/image', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US, en;q=0.8',
                    'Content-Type':`multipart/form-data; boundary=${imgForm._boundary}`,
                }
            })
        }

        setImageUrl('');
        setInput('');
        setImage('');

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

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
};

export default MessageSender;
