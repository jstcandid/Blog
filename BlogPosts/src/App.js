import './App.css';
import { createContext, useState } from 'react';
import { RootRouter } from './navigation/RootRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const themeDark = {
  titleColor: '#E5E5E5',
  textColor: '#FFFFFF',
  dateColor: '#FFFFFF',
  background: '#016efc',
  backgroundButton: '#0077F6',
  colorButton: '#fff',
  color: '#fff',
  postBackground: '#0060DC',
  postBorder: '1px solid #f8fafe',
  onChange: '#fff',
  burger: '#fff',
};

const themeLight = {
  titleColor: '#4f4f4f',
  textColor: '#979797',
  dateColor: '#016efc',
  background: '#f8fafe',
  backgroundButton: '#016efc',
  colorButton: '#fff',
  color: '#016efc',
  postBackground: '#ffffff',
  postBorder: '1px solid #c6ddff',
  onChange: '#016efc',
  burger: '#007BFF',
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
    <Provider store={store}>
      <Context.Provider
        value={{
          isDark: isDark,
          changeIsDark,
          theme: isDark ? themeDark : themeLight,
        }}
      >
        <div
          style={{
            background: isDark ? themeDark.background : themeLight.background,
          }}
          className='app'
        >
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
