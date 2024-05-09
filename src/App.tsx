import React from 'react';
import TodoWrapper from './components/TodoWrapperComponents/TodoWrapper';
import Weather from './components/WeatherComponents/Weather';

const App = () => (
  <div className="App">
    <TodoWrapper />
    <Weather/>
  </div>
);

export default App;