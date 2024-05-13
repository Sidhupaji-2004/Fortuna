import React from 'react'
import { Layout, Typography, Space} from 'antd';
import {Route, Link, Routes} from 'react-router-dom';
import { Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies, News } from './components';
import './App.css';

const App = () => {
  return (
    <div className="app chakra-petch-regular">
      <div className="navbar">
          <Navbar />
      </div>
      <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={ <Homepage />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />}/>
                <Route path="/news" element={<News />}/>
              </Routes>
            </div>
          </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color : 'white', textAlign: 'center' }}>
            Fortuna <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            <Link to='/crypto/:coinId'>Cryptodetails</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App