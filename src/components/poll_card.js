import React, { useState } from 'react';
import '../css/poll_card.css';
import Chat from './chat';


//Преобразует дату полученную с бэка под часовой пояс клиента
const convertDate = (dateString) => {
  const date = new Date(dateString);

  // Определяем часовой пояс клиента
  const offsetInMinutes = date.getTimezoneOffset();

  // Вычисляем смещение часового пояса клиента в миллисекундах
  const offsetInMilliseconds = offsetInMinutes * 60 * 1000;

  // Прибавляем смещение часового пояса к дате
  const convertedDate = new Date(date.getTime() - offsetInMilliseconds);

  // Получаем компоненты даты и времени
  const day = String(convertedDate.getDate()).padStart(2, '0');
  const month = String(convertedDate.getMonth() + 1).padStart(2, '0');
  const year = convertedDate.getFullYear();
  const hours = String(convertedDate.getHours()).padStart(2, '0');
  const minutes = String(convertedDate.getMinutes()).padStart(2, '0');

  // Формируем строку с датой, временем и часовым поясом
  const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

  return formattedDate;
};

const convertStatus = (status) => {
  if(status === 'active')
  {
    return "Активен"
  } 
  else if (status === 'planned')
  {
    return 'Запланирован'
  }
  else
  {
    return 'Завершен'
  }
}


const PollCard = ({ pollData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleVote = (poll) => {
    //Логикa для отправки голоса
    alert(`Вы проголосовали за опрос "${poll.name}"`);
  };
  

    const [isChatOpen, setIsChatOpen] = useState(true);


    const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
    };
    
    
  return (
    <div className={`poll_card`}>
      <div className="poll_header_card" onClick={handleExpand}>
        
        <div className="left_headder_card">
          <div className="name text_header_card">{pollData.name}</div>
          <div className="date text_header_card">
            Сроки проведения: {convertDate(pollData.startDate)} - {convertDate(pollData.endDate)}
          </div>
        </div>
        
        <div className="right_headder_card">
          <div className="status text_header_card">Статус: {convertStatus(pollData.status)}</div>
          <div className="users_in_poll text_header_card">
            Проголосовало: {pollData.numberVotes} /{pollData.maxNumberVoted}
          </div>
        </div>
      </div>

      {expanded && (
        <div className='poll_main_card_expanded'>
            <div className='main_data_in_card'>
              <div className="expanded_image"></div>
              <h4>Описание опроса:</h4>
              <div className='description_text'>{pollData.description}</div>
              <div className='votes_elements'>
              <h4>Варианты голоcования:</h4>
                <ul>
                  {pollData.pollValues.map(votes => (
                    <li key={votes.id} className='vote_elem'>
                      <label className='vote_label'>
                        <input
                          type="radio"
                          name="options"
                        />
                        {votes.value}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="voting_buttons">
                <button onClick={() => handleVote(pollData)}>Проголосовать</button>
                <button onClick={handleToggleChat}>Чат</button>
              </div>
            </div>
            <div className='chat_in_card'>
              {isChatOpen && <Chat onCloseChat={handleToggleChat} />}
            </div>
          </div>
      )}
    </div>
  );
};

export default PollCard;
