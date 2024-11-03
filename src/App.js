import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './components/signup/Signup';
import Welcome from './components/welcomepage/Welcome';
import Disclaimer from './components/disclaimer/Disclaimer';
import NameEnter from './components/nameenter/NameEnter';
import Count from './components/counterpage/Count';
import Quiz from './components/ohquizpage/Quiz';
import Differenc from './components/ohquizpage/Differenc';
import Difftwo from './components/ohquizpage/Difftwo';
import Final from './components/ohquizpage/Final';
import Bye from './components/bye';

const App = () => {
  const [per, setPer] = useState(''); // State to hold the name

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route  path='/nameenter' element={<NameEnter setTinku={setPer} />} /><Route path='/count'  element={<Count tinku={per} />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/differenc' element={<Differenc />} />
          <Route path='/difftwo' element={<Difftwo />} />
          <Route path='/final' element={<Final />} />
          <Route path='/bye' element={<Bye />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
