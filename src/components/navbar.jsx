import React from 'react'
import { Button, Menu, Avatar, Typography } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, UserOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import './navbar.css';

const navbar = props => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">F .o . r. t .u .n .a</Link>
            </Typography.Title>
            <Menu theme="dark" mode="vertical">
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              </Menu.Item>
              <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
              </Menu.Item>
            </Menu>
        </div>
    </div>
  )
}



export default navbar