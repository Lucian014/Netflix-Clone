import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const TitleCards = ({ title, category }) => {

    const [apiData, setApiData] = useState([]);

    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWVhODM3ODA5MTA4ZjdmZGNiYWEwODNkOWNkYTg4YyIsIm5iZiI6MTc0MTAwOTMxNi4xNTgwMDAyLCJzdWIiOiI2N2M1YjFhNDZjYTkwMzVhNmE3YTc5YWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.g76x7W9Bb9FO3AG8DkS6k6_fB6joHRqaj-Ykj8rb8wI'
        }
    };

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "popular"}?language=en-US&page=1&sort_by=popularity.desc&with_origin_country=US,GB,DE,JP&without_origin_country=IN`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel);
    }, [category])

    return (
        <div className='title-cards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards