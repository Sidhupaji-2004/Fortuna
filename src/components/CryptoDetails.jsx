import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'; 
import { useParams } from 'react-router-dom'; 
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, CheckOutlined, ThunderboltOutlined, NumberOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, LinkOutlined } from '@ant-design/icons';
import { useGetCryptosDetailsQuery, useGetCryptosHistoryQuery } from '../services/CryptoAPI';
import LineChart from './LineChart';


const { Title, Text } = Typography; 
const { Option } = Select; 

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [ timePeriod, setTimePeriod ] = useState('7d');
  const { data, isFetching } = useGetCryptosDetailsQuery(coinId);
  const { data : coinHistory } = useGetCryptosHistoryQuery({coinId, timePeriod});



  if(isFetching)  return '...Loading';
  const cryptoDetails = data?.data?.coin;
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Approved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (
    <Col className="coin-details-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {cryptoDetails.name} Price
        </Title>
        <p>
          {cryptoDetails.name} live price in US Dollars
          View Value Statistics, Market Cap and supply. 
        </p>
      </Col>
      <Select 
        defaultValue="7d" 
        className="select-timeperiod"
        onChange={(value) => setTimePeriod(value)}  
        
      > {
          time?.map((date) => <Option key={date}>{date}</Option>)
        }
      </Select>
      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name}/>
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title className="coin-details">
              {cryptoDetails.name} Value Statistics
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails.name} 
            </p>
          </Col>
          {
            stats?.map(({icon, title, value})=> (
              <Col className="coin-stats">
                <Col className="coin-stats-name">s
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
          ))}
        </Col>


        <Col className="generic-stats-container">
          <Col className="generic-coin-value-statistics-heading">
            <Title className="generic-coin-details">
              {cryptoDetails.name} Generic Statistics
            </Title>
            <p>
              An overview showing the statistics of all cryptocurrencies. 
            </p>
          </Col>
          {
            genericStats?.map(({icon, title, value})=> (
              <Col className="coin-stats">
                <Col className="coin-stats-name">
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
          ))}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title className="coin-details-heading" level={2}>
            What is {cryptoDetails.name} ?
          </Title>
          <Title level={2}>{cryptoDetails.description}</Title>
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coins-details-heading">
            {CryptoDetails.name} Links
          </Title>
          {cryptoDetails?.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  )
}

export default CryptoDetails