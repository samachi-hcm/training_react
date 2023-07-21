import { useState } from 'react';
import { createTheme } from '@mui/material/styles';

const useDarkMode = () => {
  const [theme, setTheme] = useState(createTheme());

  const {
    palette: { mode },
  } = theme;

  const toggleDarkMode = () => {
    const updatedTheme = createTheme({
      palette: {
        mode: mode === 'light' ? 'dark' : 'light',
      },
    });

    setTheme(updatedTheme);
  };

  return [theme, toggleDarkMode];
};

export default useDarkMode;
