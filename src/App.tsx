import globalState from './api/context';
import {useState, useRef, useEffect} from "react";
import {Box} from '@material-ui/core';
// pages 
import Homepage from '../src/pages/Homepage';
import Cafe from '../src/pages/Cafe';

import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';
import Signup from '../src/components/Signup';
import Login from '../src/components/Login';
import logo from './assets/illutration/logo192.png';

import {coffees_data, stories_data} from './api/local.data';

import {
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
// icons
import MenuIcon from '@material-ui/icons/Menu';


function App () {

  const [states, setStates] = useState<any>({
    coffees: coffees_data,
    stories: stories_data,
    signupHidden: true,
    loginHidden: true
  });

  const [contactsHidden, set_contactsHidden] = useState(true);
  const sideNav_isClose = useRef(true);
  const [activeUrlIndex, set_activeUrlIndex] = useState([
    "active-link", "", "", ""
  ]);
  
  function dispatchDimmer() {
    if (!sideNav_isClose.current) toggleSideNav();
    else if (!contactsHidden) toggleContacts();
    else if (!states.signupHidden) toggleSignup();
    else if (!states.loginHidden) toggleLogin();
  }

  function toggleSignup() {
    setStates((prev: any) => {
      prev.signupHidden ? dim() : dim(false);
      return {
        ...prev,
        signupHidden: !prev.signupHidden
      }
    })
  }

  function toggleLogin(){
    setStates((prev: any) => {
      prev.loginHidden ? dim() : dim(false);
      return {
        ...prev, 
        loginHidden: !prev.loginHidden,
        signupHidden: true
      }
    })
  }

  function toggleSideNav() {
    const sideNav = document.getElementById('side-nav');
    if (sideNav_isClose.current) {
      var right = '0';
      var dimmer = true;
    }
    else {
      right = '-260px';
      dimmer = false;
    }
    if (sideNav) sideNav.style.right = right;
    dim(dimmer);
    sideNav_isClose.current = !sideNav_isClose.current;
    set_contactsHidden(true);
  }

  function dim(open: boolean  = true) {
    const dimmer = document.getElementById('dimmer');
    if (open) {
      var display = "block";
      var opa = "1";
    } else {
      display = "none";
      opa = "0";
    }
    if (dimmer) {
      dimmer.style.display = display;
      dimmer.style.opacity = opa;
    }
  }

  function toggleContacts() {
    set_contactsHidden((prev: any) => {
      if (prev) dim();
      else dim(false);
      return !prev;
    });
    setStates((prev: any) => {
      return {
        ...prev, 
        signupHidden: true, 
        loginHidden: true}
    });
  }

  const urls = {
    0: "http://localhost:3000/Mascota-de-Cafe/",
    10: "http://localhost:3000/Mascota-de-Cafe",
    1: "http://localhost:3000/Cafe"
  } as any;

  function setActiveLink(n: number) {
    let x = ["","","",""];
    x[n] = "active-link";
    set_activeUrlIndex(x);
  }

  useEffect(() => {
    const url = window.location.href;
    if(url === urls[0] || url === urls[10]) setActiveLink(0);
    else if(url === urls[1]) setActiveLink(1);
  }, []);

  return <>
    <globalState.Provider value={{
      ...states, toggle_signup: toggleSignup,
      toggle_login: toggleLogin
    }}>

      <Router>
        <nav
          id="navbar"
          className="d-flex flex-align-center">

          <Link to="/Mascota-de-Cafe" className="dark-1 p-3 flex-1 d-flex flex-align-center">
            <img src={logo} className="logo mr-1" alt="mascota de cafe logo"/>
            <h3>Mascota de Cafe</h3>
          </Link>
          <Link onClick={() => {setActiveLink(0)}} to="/Mascota-de-Cafe" className={"dark-1 p-3 nav-link " + (activeUrlIndex[0]) }> Home </Link>
          <Link onClick={() => {setActiveLink(1)}} to="/Cafe" className={"dark-1 p-3 nav-link " + (activeUrlIndex[1]) }> Cafe </Link>
          <Link onClick={() => {setActiveLink(2)}} to="/" className={"dark-1 p-3 nav-link " + (activeUrlIndex[2]) }> Products </Link>
          <Link onClick={() => {setActiveLink(3)}} to="/" className={"dark-1 p-3 nav-link " + (activeUrlIndex[3]) }> Pets </Link>
          <p onClick={toggleContacts} className={"dark-1 p-3 nav-link"}> Contacts </p>
          <div onClick={toggleSideNav} id="menu-bar-icon" className="p-2 cur-pointer"> <MenuIcon /> </div>
        </nav>

        <nav id="side-nav">
          <Link onClick={() => {toggleSideNav();}} to="/Mascota-de-Cafe" className={"dark-1 p-1 ml-2 " + (states.activeTab === 0 ? 'active-link' : '')}> Home </Link>
          <Link onClick={() => {toggleSideNav();}} to="/Cafe" className={"dark-1 p-1 ml-2 " + (states.activeTab === 1 ? 'active-link' : '')}> Cafe </Link>
          <Link onClick={() => {toggleSideNav();}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 2 ? 'active-link' : '')}> Products </Link>
          <Link onClick={() => {toggleSideNav();}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 3 ? 'active-link' : '')}> Pets </Link>
          <p onClick={() => {toggleSideNav();toggleContacts()}} className={"dark-1 p-1 ml-2"}> Contacts </p>
        </nav>

        <Route path="/Mascota-de-Cafe" exact component={Homepage} />
        <Route path="/Cafe" exact component={Cafe} />

        <footer>
          <Footer />
        </footer>

        <Box hidden={contactsHidden}>
          <Contact />
        </Box>
        <Box hidden={states.signupHidden}>
          <Signup />
        </Box>
        <Box hidden={states.loginHidden}>
          <Login />
        </Box>

      </Router>
    </globalState.Provider>
    <div id="dimmer" onClick={dispatchDimmer}></div>
  </>;
}
export default App;