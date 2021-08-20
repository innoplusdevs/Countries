import React from "react";
import { useForm } from "../../hooks/useForm";
import { accordion } from "../../helpers/animations/accordion";

import searchIcon from "../../assets/icons/search.svg";

export const SearchOptions = () => {

  const [formValues, handleInputChange] = useForm();
  const { search }: any = formValues;

  const handleSearch = (e: any) => {
    e.preventDefault();
  };

  const AccordionToggle = (
    e: any,
    idCategory: string,
    idButton: string,
    idArrow: string
  ) => {
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
          onChange={(e) => handleInputChange}
          autoCorrect='false'
        />

        <img
          className='SearchOptions__Form__SearchIcon'
          src={searchIcon}
          alt='search'
        />
      </form>
      <div className="accordion" >
        <span
          id='arrow'
          className='accordion__arrow close'
          onClick={(e) =>
            AccordionToggle(e, "ul", "accordion__button", "arrow")}>
        </span>
        <button
          id='accordion__button'
          className='accordion__button close'
          onClick={(e) => AccordionToggle(e, "ul", "accordion__button", "arrow")}>
          Filter By Region
        </button>
        <ul id='ul' className='options accordion--hide open'>
          <li className='options__item open'>Africa</li>
          <li className='options__item open'>America</li>
          <li className='options__item open'>Europe</li>
          <li className='options__item open'>Oceania</li>
        </ul>
      </div>
    </div>
  );
};
