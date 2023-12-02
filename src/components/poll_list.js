import React, { useEffect, useState } from 'react';
import PollCard from './poll_card';
import '../css/poll_card.css'
import axios from 'axios';


function GetPollList(){

  //polls - хранит данные из API,  setPolls - записывает данные из API. Так как API возвращает массив, то начальное значение - это пустой массив
  const [polls, setPolls] = useState([]);
  //текущая страница
  const [currentPage, setCurrentPage] = useState(0)
  //Состояние на подгрузку данных
  const[fetching, setFetching] = useState(true)

 //Состояние на подгрузку данных
 const[totalCount, setTotalCount] = useState(0)
  

  useEffect(() => {
    if(fetching){
      axios
      .get(`http://localhost:8080/poll/filtered_list?sort=name&limit=15&page=${currentPage}`)
      .then(data => {
        setPolls([...polls, ...data.data.items]); //Чтобы не перезатирались данные, мы разворачиваем массив в который записываем старые данные и новые
      setCurrentPage(currentPage + 1)
      setTotalCount(data.data.totalCount)
      })
      .finally(() => setFetching(false));
    } 
  }, [fetching])


  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function (){
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && polls.length < totalCount)
    {
      setFetching(true);
    }
  }

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