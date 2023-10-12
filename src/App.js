import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./Page/Home.jsx"

import Components from './ComponentsCmpnts.jsx';


function App() {
  return (
    <BrowserRouter>
      {/* <Components /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
