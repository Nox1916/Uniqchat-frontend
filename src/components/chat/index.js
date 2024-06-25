import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, Add, Call, MoreVert } from '@material-ui/icons'; // Import MoreVert instead of MoreVertIcon

const Container = styled.div`
  background-color: #333; /* Dark background color */
  color: #fff; /* White text color */
  padding: 20px;
  font-family: Arial, sans-serif;
  height: 100vh; /* Adjust height as needed */
  overflow-y: auto; /* Enable scrolling if content exceeds container height */
`;

const NavBar = styled(AppBar)`
  background-color: teal !important; /* Teal color for the nav bar */
`;

const CenteredTypography = styled(Typography)`
  flex-grow: 1;
  text-align: center;
`;

const ChatList = styled.div`
  padding: 20px;
`;

const ChatItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #444;
`;

const ChatMessage = styled(Typography)`
  font-weight: bold;
`;

const Chat = () => {
  const [recentChats, setRecentChats] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  // useEffect hook to fetch recent chats when component mounts
  useEffect(() => {
    // Replace this with your logic to fetch recent chats
    const fetchRecentChats = async () => {
      // Example fetch data from an API or local storage
      const data = await fetch('/api/recent-chats');
      const chats = await data.json();
      setRecentChats(chats);
    };

    fetchRecentChats();
  }, []); // Empty dependency array ensures this runs only once on component mount

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <NavBar position="static">
        <Toolbar>
          <CenteredTypography variant="h6">
            Uniq Chat
          </CenteredTypography>
          <IconButton color="inherit" aria-label="Add More">
            <Add />
          </IconButton>
          <IconButton color="inherit" aria-label="Select Option">
            <MoreVert /> {/* Use MoreVert instead of MoreVertIcon */}
          </IconButton>
          <IconButton color="inherit" aria-label="Calls">
            <Call />
          </IconButton>
          <IconButton color="inherit" aria-label="Logout" onClick={handleMenuOpen}>
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </NavBar>
      <Container>
        <ChatList>
          {recentChats.map(chat => (
            <ChatItem key={chat.id}>
              <Typography variant="subtitle1">{chat.contactName}</Typography>
              <ChatMessage variant="body1">{chat.lastMessage}</ChatMessage>
            </ChatItem>
          ))}
        </ChatList>
      </Container>
    </>
  );
};

export default Chat;
