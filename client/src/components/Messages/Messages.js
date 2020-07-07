import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

const Input = ({ messages, name }) => (
    <ScrollToBottom>
        {messages.map((messages, i) => <div key={i}><Message message={message} name={name}/>></div>) }
    </ScrollToBottom>
);

export default Messages;