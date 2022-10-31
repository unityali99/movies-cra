import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import AddMovie from "../../AddMovie";
import Customers from "../../Customers";
import Movies from "../../Movies";
import NotFound from "../NotFound";
import Rentals from "../../Rentals";
import MovieEdit from "../../MovieEdit";
import Nav from "../Nav";
import Register from "../Register";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieEdit />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
