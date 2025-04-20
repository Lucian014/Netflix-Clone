import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/supernatural_background.jpg'
import hero_title from '../../assets/supernatural_title.png';
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} alt="" className='caption-img' />
                    <p>Raised as hunters by their father, brothers Sam and Dean Winchester travel across the country to battle demons, ghosts, and other supernatural forces lurking in the shadows. What starts as a mission to find their missing father soon turns into an epic war between heaven and hell—where family, fate, and sacrifice mean everything.
                        Saving people, hunting things—the family business. Watch now.
                    </p>
                    <div className="hero-btns">
                        <button className='btn'><img src={play_icon} alt="" />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
                    </div>
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} type="movie" />
                <TitleCards title={"Only on Netflix"} category={"popular"} type="movie" />
                <TitleCards title={"Trending TV Shows"} category={"popular"} type="tv" />
                <TitleCards title={"Top Rated TV Shows"} category={"top_rated"} type="tv" />
            </div>
            <Footer />
        </div>
    )
}



export default Home
