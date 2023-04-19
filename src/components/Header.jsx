import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderCard from './HeaderCard';
import { useState, useEffect } from 'react';

const Header = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);
  useEffect(() => {
    getRelatedMovie();
  }, []);

  const getRelatedMovie = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c5be99dc24b7084135effff95807b443&language=en-US');
    const data = await response.json();
    setRelatedMovies(data.results);
    console.log(data.results);
  }
  return (
    <section className="h-screen w-full">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 2000,
        }}
      >
          {relatedMovies.map(movie => {
            return (
              <SplideSlide key={movie.id} className="max-sm:h-3/4 max-md:h-full">
                <HeaderCard movie={movie} />
             </SplideSlide>
            );
          })}
        
      </Splide>
      
    </section>
  );
}

export default Header