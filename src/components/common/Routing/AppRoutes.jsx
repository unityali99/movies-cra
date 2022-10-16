import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Customers from "../../Customers";
import Movies from "../../Movies";
import NotFound from "../../NotFound";
import Rentals from "../../Rentals";
import SingleMovie from "../../SingleMovie";
import Nav from "../Nav";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
