import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Favorite from "../pages/Favorite";
import Romance from "../pages/Genre/Romance";
import AllAnime from "../pages/Genre/AllAnime";
import Action from "../pages/Genre/Action";
import Genre from "../pages/Genre/Genre";
import Rank from "../pages/Rank/Rank";
import Watch from "../pages/Watch/Watch";
import Details from "../pages/Details/Details";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime" element={<Genre />}>
        <Route path="" element={<AllAnime />} />
        <Route path="romance" element={<Romance />} />
        <Route path="action" element={<Action />} />
      </Route>
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
};

export default MyRoutes;
