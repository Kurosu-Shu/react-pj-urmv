import React from 'react'
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';

function Upcoming() {
  return (
      <>
          <Header />
          <CardContainer title={"Up Coming"} url={"https://api.themoviedb.org/3/movie/upcoming?api_key=c5be99dc24b7084135effff95807b443&language=en-US"} />
      </>
  )
}

export default Upcoming