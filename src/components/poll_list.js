import React from 'react';
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
    return(
        <div>
            {list.map((item, index) => (
                <div key={index} className="poll_element">
                    <div className="poll_header_card">
                        <div className="left_headder_card">
                            <div className="name text_header_card">{item.name}</div>
                            <div className="date text_header_card">Сроки проведения: {item.start_date} - {item.end_date} </div>
                        </div>
                        <div className="right_headder_card">
                            <div className="status text_header_card">Статус: {item.status} </div>
                            <div className="users_in_poll text_header_card">Проголосовало: {item.voited} /{item.people} </div>
                        </div>
                    </div>
                    <div className="poll_main_card">
                        <div className="image"></div>
                        <div className="description">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
       
}

//Список с опросами
const pollList = () => {
    return(
        <div className='polls'>
            <Polls/>
        </div>
    )
}

export default pollList