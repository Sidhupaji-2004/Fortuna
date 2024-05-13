import React from 'react'
import { useGetNewsQuery } from '../services/NewsAPI';
import { Row, Col, Card, Typography, Select, Avatar } from 'antd';


const { Text, Title } = Typography;
const { Option } = Select; 
const News = () => {
  const { data : newsData , isFetching } = useGetNewsQuery();
  console.log(newsData);
  if(isFetching)  return '...Loading';

  return (
    <Row gutter={[24, 24]}>
      {
        newsData?.data?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} rel="noreferrer" target="_blank">
                <div className="news-image-container" style={{
                  display: 'flex', 
                  flexDirection: 'column'
                }}>
                  <Title className="news-title" level={3}>{news.title}</Title>
                  <img 
                    style={{
                      width: 'auto',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                    src={news?.thumbnail} 
                    alt="news-thumbnail"
                  />
                </div>
                <p className="news-description">{news.description}</p>
              </a>
            </Card>
          </Col>
        ))
      }
    </Row>
  )
}

export default News