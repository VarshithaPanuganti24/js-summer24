import React from 'react'
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemtitle">Jane Doe  </h1>
                <div className="detailitem">
                  <span className="itemkey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemValue">+1 2344562345</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Adress:</span>
                  <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                </div>
                <div className="detailitem">
                  <span className="itemkey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"> 
            <Chart aspect={3 /1}  title="User Spending ( last 6 Months)"/>
          </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
            <List/>
          </div>
        </div>

      </div>
    
  )
}

export default Single