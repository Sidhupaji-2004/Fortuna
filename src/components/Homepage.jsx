import React from 'react';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/CryptoAPI';
import { Typography, Row, Col, Statistic } from 'antd';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery();
  if(isFetching)  return 'Loading...';
  const globalStats = data?.data?.stats;
  return (
    <>
      <Title level={1} className="heading">GLOBAL CRYPTO STATISTICS</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
      </Row>
      <div className="home-container">
        <Title level={2} className="home-title">TOP 10 CRYPTOCURRENCIES IN THE WORLD</Title>
        <Title level={3} className="home-title">
          <Link to="/cryptocurrencies">
            Show More
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more">
          <Link to="/news">
            Show More
          </Link>
        </Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage