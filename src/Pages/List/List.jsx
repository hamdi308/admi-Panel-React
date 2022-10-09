import React from 'react'
import Datatable from '../../components/DataTable/DataTable';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import './index.scss';

const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className='listContainer'>
        <NavBar />
        <Datatable/>
      </div>
    </div>
  )
}

export default List