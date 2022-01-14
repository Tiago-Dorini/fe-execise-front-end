import { Link } from "react-router-dom"

type Props = {
    id: number,
    title: string,
    overview: string,
    posterPath: string,
    voteAverage: string
}

export const MovieCard = ({ title, overview, posterPath, voteAverage, id }: Props) => {
    return (
        <Link
            to={`/${id}`}
            className="drop-shadow-[5px_10px_10px_#000000a6] flex-[0_1_17%] bg-blue-800/20 border-2 text-white border-blue-500/25 rounded-md h-[28rem] m-6 p-0"
        >
            <div className="w-full">
                <img src={`https://image.tmdb.org/t/p/original/${posterPath}`} alt="Demon Slayer Poster" width="100%" />
            </div>

            <div className="w-full flex justify-between my-1 p-2">
                <h3 className="font-semibold text-md h-auto">
                    {title}
                </h3>
                <div className="px-3 bg-purple-600 rounded-md font-semibold max-h-7">
                    {voteAverage}
                </div>
            </div>
            <div className="w-full text-sm px-2 my-3">
                {overview}
            </div>
        </Link>
    )
}