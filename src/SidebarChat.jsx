import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import './sidebarchat.css';

function SidebarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000).toString());
  }, []);

  const createChat = () => {
    const roomName = prompt('Please enter name for chat');

    if (roomName) {
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://api.dicebear.com/9.x/avataaars/svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
