import React, { useState } from 'react';
import '../css/poll_card.css';
import Chat from './chat';

const PollCard = ({ pollData }) => {


  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleVote = (poll) => {
    //Логикa для отправки голоса
    alert(`Вы проголосовали за опрос "${poll.name}"`);
  };
  

    const [isChatOpen, setIsChatOpen] = useState(false);


    const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
    };
    
    
  return (
    <div className={`poll_card ${expanded ? 'expanded' : ''}`}>
      <div className="poll_header_card">
        
        <div className="left_headder_card">
          <div className="name text_header_card">{pollData.name}</div>
          <div className="date text_header_card">
            Сроки проведения: {pollData.start_date} - {pollData.end_date}
          </div>
        </div>
        
        <div className="right_headder_card">
          <div className="status text_header_card">Статус: {pollData.status}</div>
          <div className="users_in_poll text_header_card">
            Проголосовало: {pollData.voited} /{pollData.people}
          </div>
          <div className="expand_button" onClick={handleExpand}>
            {expanded ? 'Свернуть' : 'Развернуть'}
          </div>
        </div>
      </div>

      {expanded && (
        <div className="poll_main_card_expanded">
          <div className="expanded_image"></div>

          
          <div className="voting_buttons">
            <button onClick={() => handleVote(pollData)}>Проголосовать</button>
            <button onClick={handleToggleChat}>Чат</button>
          </div>
          {isChatOpen && <Chat onCloseChat={handleToggleChat} />}
        </div>
      )}
    </div>
  );
};

export default PollCard;
