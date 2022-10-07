import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import './index.scss';
const Home = () => {
  return (
      <div className='home'>
          <SideBar />
          <div className='homeContainer'>
        <NavBar />
        home container
          </div>
    </div>
  )
}

export default Home