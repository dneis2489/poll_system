import React from 'react'
import '../../src/css/left_menu.css'

//Сборка левого меню
const Menu = ({userRole}) => {
    const getMenuItems = () => {

      //Определение роли и его элементов в меню
      switch (userRole){
        case 1:
        return [
          { label: 'Опросы', link: '/' },
          { label: 'Предложить опрос', link: '/admin' },
          { label: 'Мои опросы', link: '/settings' },
          { label: 'Справка', link: '/settings' },
        ];
      case 2:
        return [
          { label: 'Администрирование', link: '/' },
          { label: 'Опросы', link: '/profile' },
          { label: 'Создать опрос', link: '/orders' },
          { label: 'Опросы на рассмотрение', link: '/orders' },
          { label: 'Справка', link: '/orders' },
        ];
      case 3:
        return [
          { label: 'Список администраторов', link: '/' },
          { label: 'Справка', link: '/login' },
        ];
      default:
        return [];
      }
    };

    //Сборка элементов меню под конкретную роль
    const menuItems = getMenuItems();
    return(
      <div className='element'>
        <ul>
          {menuItems.map((item, index) => (
            <li key = {index}>
                <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>

      </div>
    )

}

//Получение левого меню под тестовую роль
const Left_menu = () => {
  let userRole = 2
  return(
    <div className='menu_elements'>
        <Menu userRole={userRole} />
    </div>
  )
}


export default Left_menu;


