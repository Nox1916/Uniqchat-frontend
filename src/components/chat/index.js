// Chat.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for Chat page
const Container = styled.div`
  background-color: #1f1f1f; /* Dark background color */
  color: #fff; /* White text color */
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  color: teal; /* Teal color for contact names */
`;

const Chat = () => {
  const [recentContacts, setRecentContacts] = useState([]);

  // useEffect hook to fetch recent contacts when component mounts
  useEffect(() => {
    // Replace this with your logic to fetch recent contacts
    const fetchRecentContacts = async () => {
      // Example fetch data from an API or local storage
      const data = await fetch('/api/recent-contacts');
      const contacts = await data.json();
      setRecentContacts(contacts);
    };

    fetchRecentContacts();
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <Container>
      <h1>Recent Contacts</h1>
      <ContactList>
        {recentContacts.map(contact => (
          <ContactItem key={contact.id}>{contact.name}</ContactItem>
        ))}
      </ContactList>
    </Container>
  );
}

export default Chat;
