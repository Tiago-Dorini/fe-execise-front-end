import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { MovieDetails } from "./pages/movie-details";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:movieId" element={<MovieDetails />} />
                <Route path="*" element={<h3 className="text-white text-3xl absolute left-8 top-28"> No Pages found! </h3>} />
            </Routes>
        </BrowserRouter>
    )
}