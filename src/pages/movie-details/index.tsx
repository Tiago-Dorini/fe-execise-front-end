import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router"
import { API_KEY, BASE_URL } from "../../env.variables"

export const MovieDetails = () => {

    const urlParams = useParams()
    const { isLoading, data } = useQuery('movie-details',
        () => axios.get(`${BASE_URL}/movie/${urlParams.movieId}?api_key=${API_KEY}&language=en-US`)
    )

    if (data)
        console.log(data)

    return (
        <div className="container my-28">
            <div className="grid gap-4 grid-cols-8 text-white">
                <div className="col-span-2">
                    <img src={`https://image.tmdb.org/t/p/original/${data?.data.poster_path}`} alt={`${data?.data.title}`} />
                </div>
                <div className="col-span-6">
                    <h1 className="text-4xl font-semibold">
                        {data?.data.title} &nbsp; <span className="px-3 bg-gray-600 rounded-md font-semibold text-lg py-1">{data?.data.runtime} minutes</span> &nbsp; <span className="px-3 bg-purple-600 rounded-md font-semibold text-lg py-1">{data?.data.vote_average}</span>
                    </h1>
                    <p className="mx-2 text-sm">
                        {
                            data?.data.genres.map(
                                (element: any, index: number) => index === 0 ? element.name : `, ${element.name}`
                            )
                        }
                    </p>
                    <p className="mx-2 text-sm">
                        {data?.data.release_date.slice(5, 7)}/{data?.data.release_date.slice(8, 10)}/{data?.data.release_date.slice(0, 4)}
                    </p>
                    <h2 className="text-xl mt-5 text-gray-200">
                        {data?.data.tagline}
                    </h2>
                    <p className="text-gray-300 text-justify mt-1">
                        {data?.data.overview}
                    </p>
                    <p className="text-white text-lg font-semibold mt-5">
                        {
                            data?.data.production_companies.map(
                                (element: any, index: number) => index === 0 ? element.name : `, ${element.name}`
                            )
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}