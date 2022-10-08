import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import Widget from '../../components/Widget/Widget';
import './index.scss';
const Home = () => {
  return (
      <div className='home'>
          <SideBar />
          <div className='homeContainer'>
              <NavBar />
        <div className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
          </div>
    </div>
  )
}

export default Home