import Head from './components/header'
import LeftMenu from './components/left_menu'
import PollList from './components/poll_list'
import ReactDOM from 'react-dom';


//Подлкючаем header к основной странице
const Header = () => {
    return (
      <header>
        <Head />
      </header>
    );
  };

//Подлкючаем левое меню к основной странице
const Left_menu = () => {
    return (
      <LeftMenu />
    );
};

//Подлкючаем список опросов к основной странице
const Poll_list = () => {
  return (
    <PollList  />
  );
};

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Left_menu />, document.getElementById('left_menu_container'));
ReactDOM.render(<Poll_list />, document.getElementById('polls_list'));