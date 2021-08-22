import React, { useReducer } from "react";
import { SearchContext } from "../SearchOptions/SearchContext";
import { SearchReducer } from "../SearchOptions/SearchReducer";

import { Header } from "../Header/Header";
import { SearchOptions } from "../SearchOptions/SearchOptions";
import { CountriesList } from "../Countries/CountriesList";

import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { types } from "../../types/types";

export const HomeScreen = () => {
  const location = useLocation();
  const init = () => {
    const { q = "" } = queryString.parse(location.search);
    return q
      ? { url: types.name + q }
      : { url: "https://restcountries.eu/rest/v2/all" };
  };

  const [state, dispatch] = useReducer(SearchReducer, {}, init);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <SearchOptions />
      <CountriesList />
    </SearchContext.Provider>
  );
};
