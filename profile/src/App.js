import DigiNav from './components/DigiNav';
import About from './components/About';
import Acads from './components/Acads';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import Achieves from './components/Achieves';
import Contact from './components/Contact';
import DigiFooter from './components/DigiFooter';


function App() {

  return (
    <div className="App container">
      <DigiNav/>
      <div className='container-fluid mt-5'>
         {/* get each component and add it here */}
         <About/>
         <Acads/>
         <TechSkills/>
         <Projects/>
         <Achieves/>
         <Contact/>
      </div>
      <DigiFooter/>

    </div>
  );

}

export default App;
