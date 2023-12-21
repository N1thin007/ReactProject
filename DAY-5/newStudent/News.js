// NewsPage.js
import React from 'react';
import './News.css';

const NewsPage = () => {
  // Sample news data
  const schoolNews = [
    {
      id: 1,
      title: 'Upcoming Event: Science Fair',
      content: 'The annual Science Fair will be held on December 15th. Register now!',
      date: '2024-12-05',
    },
    {
      id: 2,
      title: 'School Holiday Schedule',
      content: 'Please note that the school will be closed from December 24th to January 3rd for winter break.',
      date: '2024-12-01',
    },
    {
      id: 3,
      title: 'Sports Day Success',
      content: 'The Sports Day event concluded with an overwhelming participation and enthusiastic performances.',
      date: '2024-11-20',
    },
    {
      id: 4,
      title: 'Community Outreach Program',
      content: 'Join us for the community outreach program next Saturday to support local initiatives.',
      date: '2024-11-10',
    },
    // Add more news items
  ];

  return (
    <div>
    <h2 style={{marginLeft:'30px'}}>School News</h2>
    <div className="news-container">
      {schoolNews.map((newsItem) => (
        <div className="news-item" key={newsItem.id}>
          <h3>{newsItem.title}</h3>
          <p>{newsItem.content}</p>
          <p className="news-date">Published on: {newsItem.date}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default NewsPage;
