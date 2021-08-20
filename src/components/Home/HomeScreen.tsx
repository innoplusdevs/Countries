import React from 'react';
import { CountriesList } from '../Countries/CountriesList';
import { Header } from '../Header/Header';
import { SearchOptions } from '../SearchOptions/SearchOptions';

export const HomeScreen = () => {
  return (
    <div>
      <Header/>
      <SearchOptions />
      <CountriesList/>
    </div>
  )
}
