import './App.css';
import { createContext, useState } from 'react';
import { RootRouter } from './navigation/RootRouter';

const themeDark = {
  titleColor: '#E5E5E5',
  textColor: '#FFFFFF',
  dateColor: '#FFFFFF',
  background: '#016efc',
  color: '#fff',
  postBackground: '#0060DC',
  postBorder: '1px solid #f8fafe',
};

const themeLight = {
  titleColor: '#4f4f4f',
  textColor: '#979797',
  dateColor: '#016efc',
  background: '#f8fafe',
  color: '#016efc',
  postBackground: '#ffffff',
  postBorder: '1px solid #c6ddff',
};

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: themeLight,
});

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <Context.Provider
      value={{
        isDark: isDark,
        changeIsDark,
        theme: isDark ? themeDark : themeLight,
      }}
    >
      <div
        style={{ background: isDark ? '#016efc' : '#f8fafe' }}
        className='app'
      >
        <RootRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
