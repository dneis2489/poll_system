import React, { useState } from 'react';

const Chat = ({ onCloseChat }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = () => {
    // Логика отправки сообщения, например, добавление в массив сообщений
    setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
      <button onClick={onCloseChat}>Закрыть чат</button>
    </div>
  );
};

export default Chat;
