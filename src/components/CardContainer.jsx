import React, {useState, useEffect} from "react";
import Card from './Card';

function CardContainer({title, url}) {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        getPopularMovies();
        // eslint-disable-next-line 
    }, []);

    const getPopularMovies = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPopularMovies(data.results);
        // console.log(data.results);
    }

    return (
        <section className="px-5 my-10 font-bold">
            <h1 className="text-4xl text-mono text-white max-sm:text-xl max-md:text-2xl">{ title }</h1>
            <div className="grid grid-cols-10 gap-3 mt-4 max-sm:grid-cols-4 max-sm:gap-1 max-md:grid-cols-4 max-md:gap-1 max-lg:grid-cols-4 max-lg:gap-2">
                {
                    popularMovies.length && popularMovies.map(mv => {
                        return (
                            <Card movie={mv} key={mv.id} />
                        );
                  })
                }
            </div>
        </section>
    );
}

export default CardContainer;