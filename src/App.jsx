import React from 'react';
import Contact from './components/contact/Contact';
import Techskill from './components/techskill/Techskill';
import Softskill from './components/softskill/Softskill';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About';
import Project from './components/project/Project';
/*import Achivement from './components/achivement/Achivement';*/
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <About />
      <Techskill />
      <Softskill />
      <Project />
      {/*<Achivement />*/}
      <Contact />
      <Footer />
    </>
  )
}

export default App
