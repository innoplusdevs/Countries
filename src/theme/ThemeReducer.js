export const ThemeReducer = (state = {}, action) => {

  switch (action) {
    case 'darkMode':
      return {
        ...action.payload,
        theme: 'darkMode'
      }

    case 'lightMode':
      return {
        ...action.payload,
        theme: 'lightMode'
      }

    default:
      return state;
  }

}
