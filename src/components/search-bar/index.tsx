import { SearchIcon } from "../icons"

export const SearchBar = () => {
    return (
        <div className="container my-5">
            <form
                onSubmit={
                    (form) => {
                        form.preventDefault()
                    }
                }
            >
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control bg-transparent border-2 border-blue-600 placeholder:text-white/50 text-white"

                        placeholder="Movies, series, people..."
                    />
                    <button
                        type="submit"
                        className="btn bg-blue-600 hover:bg-blue-700 "
                    >
                        <i
                            className="text-white"
                        >
                            <SearchIcon />
                        </i>
                    </button>
                </div>
            </form>
        </div>
    )
}