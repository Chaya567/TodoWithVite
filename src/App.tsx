import React from 'react';
import TodoWrapper from './components/TodoWrapperComponents/TodoWrapper';
import Weather from './components/WeatherComponents/Weather';

const App: React.FC = () => (
  <div className="App">
    <TodoWrapper />
    <Weather/>
  </div>
);

export default App;