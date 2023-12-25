import React, { useState } from 'react';
import '../css/chat.css'
import Image from './Image'
import chat_icon from '../../src/img/card_icons/chat_icon.png'

const Chat = ({ onCloseChat }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = () => {
    // Логика отправки сообщения, например, добавление в массив сообщений
    setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можете добавить логику отправки сообщения
    setChatMessages([...chatMessages, { text: message, sender: 'user' }]);
    // Очистка поля ввода после отправки
    setMessage('');
  };

  const handleKeyPress = (e) => {
    // Если нажата клавиша Enter (код 13), то вызываем handleSubmit
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

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
          className="text_input"
          type="text"
          placeholder="Введите сообщение..."
          value={message}
          onKeyPress={handleKeyPress}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='send_btn' onClick={handleSendMessage} ><Image image = {chat_icon}/></button>
      </div>
    </div>
  );
};

export default Chat;
