import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useFetch } from "../../hooks/useFetch";

export const CountryScreen = () => {
  const history = useHistory();

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const url = `https://restcountries.eu/rest/v2/name/${q}`;

  const { data, loading } = useFetch(url);

  return (
    <div>
      {!loading ? (
        data &&
        data.map(({ name, flag, population, region, capital }) => (
          <div>
            <div className='CountriesList__Item__image'>
              <img src={flag} alt='flag' />
            </div>
            <div className='CountriesList__Item__Description'>
              <h4 className='CountriesList__Item__Description__name'>{name}</h4>
              <p>
                <span>Population:</span> {population.toLocaleString()}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              <p>
                <span>Capital:</span> {capital}
              </p>
            </div>
          </div>
        ))  
      ) : (
        <p className='Loading'>Loading...</p>
      )}
    </div>
  );
};
