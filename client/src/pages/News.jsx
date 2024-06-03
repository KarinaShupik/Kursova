import React, { useState, useEffect } from 'react';
import newsImg from "../img/news_main_img.png";
import "../styles/News.css";

export default function News() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const items = document.querySelectorAll('.news-item');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
                dots[i].classList.toggle('active', i === index);
            });
        }

        showSlide(currentIndex);

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

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
            title: "The Smiths: Vinyl Revival",
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
        },
        {
            title: "Music Festivals: Summer Highlights",
            description: "Summer is the season for music festivals! Check out the highlights from this year's biggest events, featuring performances from top artists and unforgettable moments.",
            time: getRandomTime()
        },
        {
            title: "Art Exhibition: The Renaissance Reimagined",
            description: "Step into a world where the past meets the present at 'The Renaissance Reimagined' exhibition. Witness classic artworks transformed with modern interpretations and techniques.",
            time: getRandomTime()
        }
    ];

    return (
        <div className="news-container">
            <h2 className="news-heading">News</h2>
            <div className="slider">
                {newsData.map((item, index) => (
                    <div className={`news-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <img src={newsImg} alt="News Image" className="news-image" />
                        <div className="news-content">
                            <div className="news-time">{item.time}</div>
                            <h3 className="news-title">{item.title}</h3>
                            <p className="news-description">{item.description}</p>
                            <a href="#" className="read-more">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {newsData.map((_, index) => (
                    <span
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        key={index}
                    ></span>
                ))}
            </div>
        </div>
    );
}