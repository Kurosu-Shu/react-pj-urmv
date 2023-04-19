import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayIcon } from '@heroicons/react/24/solid';

function Details() {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, [id]);
    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c5be99dc24b7084135effff95807b443&language=en-US`);
        const data = await response.json();
        setMovie(data);
        //console.log(data);
    }

    return (
        <section>
            {
                movie && (
                    <section className="w-full h-screen relative">
                        <div className="h-2/3 relative">
                            <img
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                            />
                            <div className="dark-ov"></div>
                        </div>
                        <div className="detail-container">
                            <img
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.title}
                            className="w-52 rounded-md "
                            />
                          <div className="ms-4 text-white">
                                <h1 className="text-4xl font-semibold ">{movie.original_title}</h1>
                                <p className="text-lg mb-2"><span className="text-red-600 font-medium">Release On:</span> {movie.release_date}</p>
                                <p className="text-lg mb-3"><span className="text-red-600 font-medium">Runtime:</span> {movie.runtime}min</p>
                                
                                {
                                    movie.genres && movie.genres.map(g => {
                                        return <span className="bg-red-600 px-2 py-2 rounded-md font-bold inline-block me-1 my-1  " key={g.id}>{g.name}</span>
                                    })
                                }
                                <h2 className="text-xl my-3 ">{movie.overview}</h2>
                                
                                
                                <Link
                                    to={movie.homepage}
                                    className="font-bold text-lg px-3 py-2 rounded-lg border border-red-600 mt-2 "
                                >
                                    <PlayIcon className="w-6 h-6 text-red-600 inline-block me-2" />
                                    Watch Now
                                </Link>
                          </div>
                        </div>
                    </section>
                )
            }
        </section>
    );
}

export default Details