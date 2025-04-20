import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: ""
    })


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWVhODM3ODA5MTA4ZjdmZGNiYWEwODNkOWNkYTg4YyIsIm5iZiI6MTc0MTAwOTMxNi4xNTgwMDAyLCJzdWIiOiI2N2M1YjFhNDZjYTkwMzVhNmE3YTc5YWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.g76x7W9Bb9FO3AG8DkS6k6_fB6joHRqaj-Ykj8rb8wI'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error(err));
    }, [])



    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%'
                src={`https://www.youtube.com/embed/${apiData.key}`}
                title='trailer' frameBorder='0' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player
