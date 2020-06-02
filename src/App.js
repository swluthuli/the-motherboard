import React from 'react';
import './default.scss';
import Header from './component/header';
import Homepage from './pages/Homepage';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Homepage></Homepage>
    </div>
  );
}

export default App;
