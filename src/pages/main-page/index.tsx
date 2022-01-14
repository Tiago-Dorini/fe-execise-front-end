import { useQuery } from "react-query"
import { MovieCard } from "../../components/movie-card"
import { Navbar } from "../../components/navbar"
import { SearchBar } from "../../components/search-bar"
import { API_KEY, BASE_URL } from "../../env.variables"
import axios from "axios"
import { SpinnerIcon } from "../../components/icons"

export const MainPage = () => {
    const { isLoading, data } = useQuery(
        'popular-movies', () => {
            return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        }
    )

    if (data) {
        console.log(data)
    }

    if (isLoading) {
        return <span><SpinnerIcon /></span>
    }

    return (
        <>
            <SearchBar />
            <div className="flex justify-center my-5">
                <h2 className="text-white/70 font-semibold text-4xl"> Top rated </h2>
            </div>
            <div
                className="w-full p-10 bg-white/20 flex flex-wrap justify-between drop-shadow-2xl"
            >
                {
                    data?.data.results.map(
                        (element: any, index: number) => <MovieCard key={index} id={element.id} title={element.title} overview={element.overwiew} posterPath={element.poster_path} voteAverage={element.vote_average} />
                    )
                }
                {/* <MovieCard title={data?.data.title} /> */}
            </div>
        </>
    )
}