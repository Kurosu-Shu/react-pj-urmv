import React from 'react';
import Header from '../components/Header';
import PopularComponent from '../components/CardContainer';

function Popular() {
    return (
        <>
            <Header />
            <PopularComponent title={"Popular Now"} url={"https://api.themoviedb.org/3/movie/popular?api_key=c5be99dc24b7084135effff95807b443&language=en-US"} />
        </>
    );
}

export default Popular;