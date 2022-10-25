import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";
import Customers from "../../Customers";
import Movies from "../../Movies";
import NotFound from "../../NotFound";
import Rentals from "../../Rentals";
import SingleMovie from "../../SingleMovie";
import Nav from "../Nav";
import Register from "../Register";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
