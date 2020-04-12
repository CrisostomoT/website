import React from 'react';
import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import NavPage from './Components/Home/Nav';
import Content from './Components/Home/Content'

//Custom styles
import './Components/Home/style.css'

function App() {
  return (
    <>
    <NavPage />
    <Content />
    </>
  );
}

export default App;
