import React from 'react';
import './sidebar.css';
import { Avatar } from '@mui/material';
import { DonutLarge, SearchOutlined } from '@mui/icons-material';
import { Chat } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function Sidebar() {
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
      <div className="sidebar__chats">Chats</div>
    </div>
  );
}

export default Sidebar;
