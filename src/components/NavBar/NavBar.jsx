import useContext from 'react';
import './index.scss';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from '../../context/darkModeContext';

const NavBar = () => {
    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
           <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"  />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://media-exp1.licdn.com/dms/image/D4D03AQHNsDC3Q_pdkg/profile-displayphoto-shrink_800_800/0/1663161650345?e=1670457600&v=beta&t=fLzDbeWkdkfNXBvKMtlb1FQRaXYKgIPSVdY1gkg5rOM"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar