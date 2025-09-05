import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { Avatar } from '@mui/material';
import { DonutLarge, SearchOutlined } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
import db from './firebase.js';
import { collection, doc, setDoc } from 'firebase/firestore';

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input
            type="text"
            placeholder="Search or start a new chat"
          />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
