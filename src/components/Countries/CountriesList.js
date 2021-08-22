import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import { SearchContext } from "../SearchOptions/SearchContext";

export const CountriesList = () => {

  const { state } = useContext(SearchContext);
  const { url } = state;

  let { data, loading } = useFetch(url);
  
  const history = useHistory();

  const showMore = (e, name) => {
    e.preventDefault();
    history.push(`country/?q=${name}`);
  }

  return (
    <ul className="CountriesList">
      {!loading ?
        (data ?
          data.map(({ name, alpha2Code, flag, population, region, capital }) => (
            <li className="CountriesList__Item animate__animated animate__bounceIn" key={alpha2Code} onClick={ (e) => showMore(e, name)}>
              <div className="CountriesList__Item__image">
                <img src={flag} alt="flag" />
              </div>
              <div className="CountriesList__Item__Description">
                <h4 className="CountriesList__Item__Description__name">{name}</h4>
                <p> <span>Population:</span> {population.toLocaleString()}</p>
                <p> <span>Region:</span> {region}</p>
                <p> <span>Capital:</span> {capital}</p>
              </div>
              <div className="CountriesList__Item__show-more"><p>Click for show more...</p></div>
            </li>

          ))
          : <div className="CountryNotFound">
            <p>There is not a country with this name...</p>
          </div>) :
        <p className="Loading">Loading...</p>
      }
    </ul>
  )
};
