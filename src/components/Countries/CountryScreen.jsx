import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useFetch } from "../../hooks/useFetch";
import backIcon from "../../assets/icons/arrow_back.svg";

export const CountryScreen = () => {
  const history = useHistory();

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const url = `https://restcountries.eu/rest/v2/name/${encodeURIComponent(q)}`;

  const { data, loading } = useFetch(url);
  console.log(data);

  const comeBack = (e) => {
    e.preventDefault();
    history.replace("/");
  };
  // const {
  //   flag,
  //   name,
  //   nativeName,
  //   population,
  //   region,
  //   subregion,
  //   capital,
  //   topLevelDomain,
  //   currie,
  //   currencies,
  //   languages,
  //   borders,
  // } = data || '';
  return (
    <div>
      {!loading ? (
        data && (
          <div className='Country'>
            <button className='Country__back' onClick={comeBack}>
              <img src={backIcon} alt='back' />
              Back
            </button>
            <div className='Country__grid animate__animated animate__fadeInLeft'>
              <div className='Country__image'>
                <img src={data[0].flag} alt='flag' />
              </div>
              <div className='Country__Description'>
                <h4 className='Country__name'>{data[0].name}</h4>
                <div>
                  <p className='Country__Description__nativeName'>
                    <span>Native Name:</span> {data[0].nativeName}
                  </p>
                  <p className='Country__Description__population'>
                    <span>Population:</span>
                    {data[0].population.toLocaleString()}
                  </p>
                  <p className='Country__Description__region'>
                    <span>Region:</span> {data[0].region}
                  </p>
                  <p className='Country__Description__subregion'>
                    <span>Sub Region:</span> {data[0].subregion}
                  </p>
                  <p className='Country__Description__capital'>
                    <span>Capital:</span> {data[0].capital}
                  </p>
                </div>
                <div>
                  <p className='Country__Description__topLevelDomain'>
                    <span>Top Level Domain:</span> {data[0].topLevelDomain}
                  </p>
                  <p className='Country__Description__currencies'>
                    <span>Currencies:</span>
                    {data[0].currencies.map((currencies) => (
                      <p>{currencies.name}</p>
                    ))}
                  </p>
                  <p className='Country__Description__languages'>
                    <span>Languages:</span>
                    {data[0].languages.map((language) => (
                      <p>{language.name}</p>
                    ))}
                  </p>
                </div>
                <div className='Country__Description__borders'>
                  <span>Borders Countries: </span>
                  {data[0].borders[0] ? (
                    data[0].borders.map((border) => <p className='Country__Description__borders__item'>{border}</p>)
                  ) : (
                    <p>None</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <p className='Loading'>Loading...</p>
      )}
    </div>
  );
};
