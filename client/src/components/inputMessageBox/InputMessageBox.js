import React from 'react';

import Styles from './InputMessageBox.module.css';

const InputMessage = ({
  message,
  setmessage,
  handleSendMessage,
  handleTypingMessage,
}) => {
  return (
    <form className={Styles.inputMessageForm}>
      <input
        className={`${Styles.sendMessage} sendMessageBox`}
        type='text'
        placeholder='Type your message...'
        value={message}
        onChange={e => setmessage(e.target.value)}
        onKeyPress={e => (e.key === 'Enter' ? handleSendMessage(e) : null)}
        onKeyUp={e => handleTypingMessage(e)}
      />
      <button className={Styles.sendBtn} onClick={e => handleSendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default InputMessage;
