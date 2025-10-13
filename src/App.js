/*
  Copyright © Digital Minds
  Unauthorized copying, modification, or distribution of this file,
  via any medium, is strictly prohibited.
  This code is proprietary and confidential.
*/

import { Route, Routes } from 'react-router-dom';
import './App.css';

import HeroSection from './Pages/HomePage/HeroSection';
import Root from './Pages/Root';
import PersonalSkills from './Pages/QuizesSection/PersonalSkills';






function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<HeroSection />} />
          <Route path=':text/:card/:id' element={<PersonalSkills />} />
        </Route>
      </Routes>


    </>
  );
}

export default App;
