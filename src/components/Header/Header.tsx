import React from 'react'

import dark_mode from '../../assets/icons/dark_mode.svg';
import light_mode from '../../assets/icons/light_mode.svg';

export const Header = () => {
  return (
    <header className="Header">
      <h3>Where in the world?</h3>
      <div className="ThemeSelect">
          <img className="ThemeSelect__icon" src={light_mode}  alt="theme"/>
          <p className="ThemSelect__name">Light Mode</p>
      </div>
    </header>
  )
}
