import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import AddMovie from "../../AddMovie";
import Customers from "../../Customers";
import Movies from "../../Movies";
import NotFound from "../NotFound";
import Rentals from "../../Rentals";
import MovieEdit from "../../MovieEdit";
import Nav from "../Nav";
import Register from "../Register";
import Login from "../Login";
import useLocalStorage from "../../../utils/customHooks/useLocalStorage";
import decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";

const AppRoutes = () => {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) setUser(decode(token));
    else setUser(null);
  }, [token]);

  return (
    <HashRouter>
      <Nav setToken={setToken} user={user} />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieEdit />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/register" element={<Register token={token} />} />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
