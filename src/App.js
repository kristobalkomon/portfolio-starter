import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/experience";
import Works from "./Components/Works/works";
import Portfolio from "./Components/Portfolio/portfolio";
import Testimonials from "./Components/Testimonials/testimonials";
import Contacts from "./Components/Contacts/contacts";
import Footer from "./Components/Footer/footer";
import Toggle from "./Components/Toggle/toggle";
import {themeContext} from './context';
import { useContext } from "react";
import Modal from './Components/Modal/modal';
import './App.css';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background: darkMode? 'black':'',
      color: darkMode? 'white':''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
      <Toggle/>
      <Modal/>
    </div>
  );
}

export default App;
