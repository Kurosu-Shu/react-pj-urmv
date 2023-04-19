import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function Search() {
    const { title } = useParams();
    const [searchMovies, setSearchMovie] = useState([]);

    useEffect(() => {
        getSearchMovie();
        //eslint-disable-next-line
    }, [title]);

    const getSearchMovie = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c5be99dc24b7084135effff95807b443&language=en-US&query=${title}&page=1&include_adult=false`);
        const data = await response.json();
        setSearchMovie(data.results);
        // console.log(data);
    }
  return (
    <section className="px-5 my-10 font-bold">
          <h1 className="text-4xl text-mono text-white">Search results for "{title}"</h1>
          <div className="grid grid-cols-10 gap-3 mt-4">
              {
                  searchMovies && searchMovies.map(mv => {
                    return <Card key={mv.id} movie={mv} />
                })  
              }
         </div>
        </section>
  )
}

export default Search;