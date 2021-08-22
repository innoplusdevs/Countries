import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import queryString from "query-string";
import { SearchContext } from "./SearchContext";

import { accordion } from "../../helpers/animations/accordion";
import { types } from "../../types/types";

import searchIcon from "../../assets/icons/search.svg";

export const SearchOptions = () => {
  const history = useHistory();

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ search: q });
  const { search } = formValues;

  const { dispatch } = useContext(SearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
    search
      ? dispatch({
          type: types.name,
          name: search,
        })
      : dispatch({
          type: types.all,
        });
  };

  const handleFilter = (e, region) => {
    e.preventDefault();
    dispatch({
      type: types.region,
      region: region,
    });
    AccordionToggle(e, "ul", "accordion__button", "arrow");
  };

  const AccordionToggle = (e, idCategory, idButton, idArrow) => {
    e.preventDefault();
    accordion(idCategory, idButton, idArrow);
  };

  return (
    <div className='SearchOptions'>
      <form className='SearchOptions__Form' onSubmit={handleSearch}>
        <input
          type='search'
          name='search'
          placeholder='Search for a country...'
          autoComplete='off'
          value={search}
          onChange={handleInputChange}
          autoCorrect='false'
        />

        <img
          className='SearchOptions__Form__SearchIcon'
          src={searchIcon}
          alt='search'
        />
      </form>
      <div className='accordion'>
        <span
          id='arrow'
          className='accordion__arrow close'
          onClick={(e) =>
            AccordionToggle(e, "ul", "accordion__button", "arrow")
          }></span>
        <button
          id='accordion__button'
          className='accordion__button close'
          onClick={(e) =>
            AccordionToggle(e, "ul", "accordion__button", "arrow")
          }>
          Filter By Region
        </button>
        <ul id='ul' className='options accordion--hide open'>
          <li
            className='options__item open'
            onClick={(e) => handleFilter(e,"africa")}>
            Africa
          </li>
          <li
            className='options__item open'
            onClick={(e) => handleFilter(e,"americas")}>
            America
          </li>
          <li
            className='options__item open'
            onClick={(e) => handleFilter(e,"europe")}>
            Europe
          </li>
          <li
            className='options__item open'
            onClick={(e) => handleFilter(e,"oceania")}>
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
};
