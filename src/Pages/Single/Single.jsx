import React from 'react';
import './index.scss';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import Chart from '../../components/Chart/Chart';
import TableList from '../../components/TableList/TableList';
const Single = () => {
  return (
    <div className="single">
      <SideBar/>
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://media-exp1.licdn.com/dms/image/D4D03AQHNsDC3Q_pdkg/profile-displayphoto-shrink_400_400/0/1663161650345?e=1671062400&v=beta&t=k6zcxCYRJ0dbowFoBOo8WHb-gPcBrewqyWZQXM1GsTc"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Hamdi Hadda</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">haddahamdi308@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+216 94365066</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Bekalta,Monastir 
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Tunisia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <TableList/>
        </div>
      </div>
    </div>
  )
}

export default Single