import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cats from './component/Cats';
import FAQ from './component/FAQ';
import Contactus from './component/Contactus';
import Aboutus from './component/Aboutus';
import { Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
      <Route path='' element={<Home />}/>

      <Route path='/' element={<Home />}/>
      <Route path='/cats' element={<Cats />} />
      <Route path='/faq' element={<FAQ />}/>
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/aboutus' element={<Aboutus />} />

      </Routes>
    </div>
  );
}

export default App;
