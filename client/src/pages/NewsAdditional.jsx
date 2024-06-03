import React from 'react';
import newsImg from "../img/news_main_img.png";
import "../styles/NewsAdditional.css";

export default function NewsAdditional() {
    function getRandomTime() {
        const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
        const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
        const seconds = String(Math.floor(Math.random() * 60)).padStart(2, '0');
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const day = days[Math.floor(Math.random() * days.length)];
        const date = String(Math.floor(Math.random() * 30) + 1).padStart(2, '0'); // Random date from 1 to 30

        return `${hours}:${minutes}:${seconds} ${day} ${date}`;
    }

    const newsData = [
        {
            title: "The Smiths: Vinyl Revival Breaking News",
            description: "Rediscover the magic of The Smiths with a revival of their classic vinyl records. Collectors and new fans alike are diving into the rich, nostalgic sound that defined an era.",
            time: getRandomTime()
        },
        {
            title: "Jazz Night: Live Performances to Enjoy",
            description: "Experience the soulful rhythms of jazz at your local venues. Enjoy live performances by talented musicians bringing the timeless genre to life with every note.",
            time: getRandomTime()
        },
        {
            title: "Gallery Spotlight: Contemporary Art Trends",
            description: "Explore the latest trends in contemporary art. From abstract expressionism to digital installations, discover the artists who are pushing boundaries and redefining the art scene.",
            time: getRandomTime()
        }
    ];

    return (
        <div className="news-container">
            <div className="news-list">
                {newsData.map((item, index) => (
                    <div className="news-card" key={index}>
                        <img src={newsImg} alt="News" className="news-card-image" />
                        <div className="news-card-content">
                            <div className="news-card-time">{item.time}</div>
                            <div className='first'>
                                <h3 className="news-card-title">{item.title}</h3>
                            </div>
                            <div className='sec'>
                                <p className="news-card-description">{item.description}</p>
                            </div>
                            <div className='third'>
                                <a href="#" className="news-card-read-more">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
