import React, { useEffect, useState } from 'react';
import PollCard from './poll_card';
import '../css/poll_card.css'
import axios from 'axios';


function GetPollList(){

  //polls - хранит данные из API,  setPolls - записывает данные из API. Так как API возвращает массив, то начальное значение - это пустой массив
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/poll/filtered_list?sort=name&limit=20&page=0')
      .then(data => {
        setPolls(data.data.items);
      })
  }, [])

  return (
    <div className='polls'>
      {polls.map(poll => (
        <div key={poll.id} className="poll_element">
          {/* данные опроса и обработчики событий в компонент PollCard */}
          <PollCard pollData={poll} />
        </div>
      ))}
    </div>
  );

}


//Список с опросами
const pollList = () => {
    return(
      GetPollList()
    )
}

export default pollList