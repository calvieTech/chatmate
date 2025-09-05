import {
  AttachFile,
  MoreVert,
  SearchOutlined,
} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { InsertEmoticon } from '@mui/icons-material';
import { MicSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://api.dicebear.com/9.x/pixel-art/svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className={`chat__message ${true && `chat__receiver`}`}>
          <span className="chat__name">Sonny</span>
          Message Messages
          <span className="chat__timestamp">3:52 pm</span>
        </div>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input
            placeholder="Type a message"
            type="text"
            name=""
            id=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicSharp />
      </div>
    </div>
  );
}

export default Chat;
