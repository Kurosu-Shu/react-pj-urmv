import { PlayCircleIcon } from "@heroicons/react/24/solid";

function HeaderCard({movie}) {
    return (
        <div className="w-full h-screen relative">
            <img 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
            alt={movie.title} 
            className="w-full h-full object-cover max-md:h-full max-sm:h-full" 
            />
            <div className="dark-ov"></div>
            <div className="text-box">
                <h1 className="text-5xl font-extra-bold mb-1 max-sm:text-3xl max-md:text-4xl ">{ movie.title}</h1>
                <p className=" font-medium text-justify mb-2 max-sm:text-sm max-md:text-justify">{movie.overview}</p>
                <button className="bg-white text-black px-3 py-2 rounded-md font-medium text-lg mt-1 max-sm:text-sm max-md:text-sm">
                    <PlayCircleIcon className="w-6 h-6 inline-block m-0 me-2 max-sm:w-4" />
                        Watch Now
                </button>
            </div>
        </div>
    );
}

export default HeaderCard;