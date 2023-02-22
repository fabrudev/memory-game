import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeStyles.css'

const Home = () => {

    const navigate = useNavigate();

    const goToGame = () => {
        navigate("/game");
    }

    return (
        <div className='home'>
            <h1 className='home__title'>Memory Game!</h1>
            <h2 className='home__subtitle'>by: Fabru-Dev</h2>
            <button onClick={goToGame} className='home__button'>CLICK TO PLAY</button>
        </div>
    );
};

export default Home;