import React from 'react';

import './InputMessageBox.module.css';

const InputMessage = ({ message, setmessage, handleSendMessage }) => {
  return (
    <form className='inputMessageForm'>
      <input
        className='sendMessage'
        type='text'
        placeholder='Type your message...'
        value={message}
        onChange={e => setmessage(e.target.value)}
        onKeyPress={e => (e.key === 'Enter' ? handleSendMessage(e) : null)}
      />
      <button className='sendBtn'>Send</button>
    </form>
  );
};

export default InputMessage;
