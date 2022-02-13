import './App.css';

import { RootRouter } from './navigation/RootRouter';

function App() {
  return (
    <div
      style={{
        maxWidth: '1569px',
        width: '100%',
        background: '#F8FAFE',
      }}
    >
      <RootRouter />

    </div>
  );
}

export default App;
