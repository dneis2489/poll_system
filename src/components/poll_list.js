import React from 'react';
import PollCard from './poll_card';
import '../css/poll_card.css'

//Тестовые данные
const list = [
    {
        name: 'Сбор средств на уборку придомовой територии от снега', status: 'Активен', start_date: '22.11.2023',
        end_date: '01.12.2023', people: 100, voited: 22, isVoited: true, description: 'Необходимо собрать деньги на уборку придомовой территории от снега',
        creator: 'admin'
    },
    {
        name: 'Сбор средств на постройку площадки', status: 'Активен', start_date: '22.11.2023',
        end_date: '01.12.2023', people: 100, voited: 22, isVoited: true, description: 'Необходимо собрать деньги на постройку детской площадки',
        creator: 'admin'
    },
    {
        name: 'Сбор средств на уборку мусора', status: 'Активен', start_date: '22.11.2023',
        end_date: '01.12.2023', people: 100, voited: 22, isVoited: true, description: 'Необходимо собрать деньги на уборку придомовой территории от мусора',
        creator: 'admin'
    }
]

//Сборка списка с опросами из объекта
const Polls = () => {
    const handleVote = (poll) => {
      // Обработчик для голосования
      alert(`Голос за опрос ${poll.name}`);
    };
  
    const handleChatClick = () => {
      // Обработчик для открытия чата
      alert('Открываем чат');
    };
  
    return (
      <div>
        {list.map((item, index) => (
          <div key={index} className="poll_element">
            {/* данные опроса и обработчики событий в компонент PollCard */}
            <PollCard pollData={item} handleVote={handleVote} handleChatClick={handleChatClick} />
          </div>
        ))}
      </div>
    );
  };

//Список с опросами
const pollList = () => {
    return(
        <div className='polls'>
            <Polls/>
        </div>
    )
}

export default pollList