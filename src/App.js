import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import MainTasks from './components/MainTasks/MainTasks';
import Projects from './components/ourProjects/ourProjects';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="container bench-nine">
      <Navbar/>
      <Intro/>
      <About/>
      <MainTasks/>
      <Projects/>
      <Contact/>
      </div>
      <Footer/>     
    </React.Fragment>
  );
}

export default App;