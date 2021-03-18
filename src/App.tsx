import globalState from './api/context';
import {useState, useRef} from "react";
import {Box} from '@material-ui/core';
// pages
import Homepage from '../src/pages/Homepage';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';

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
    activeTab: 0
  });
  const [contactsHidden, set_contactsHidden] = useState(true);
  const sideNav_isClose = useRef(true);
  
  function dispatchDimmer() {
    if (!sideNav_isClose.current) {
      toggleSideNav();
    }
    else if (!contactsHidden) {
      toggleContacts();
    }
  }

  function toggleSideNav () {
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
  }

  function changeTab (n: number) {
    setStates({...states, activeTab: n});
  }

  function dim(open: boolean = true) {
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
  }

  return <>
    <globalState.Provider value={
      states
    }>

      <Router>
        <nav
          id="navbar"
          className="d-flex flex-align-center">

          <Link to="/" className="dark-1 p-3 flex-1">
            <h3>Mascota de Cafe</h3>
          </Link>
          <Link onClick={() => {changeTab(0);}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 0 ? 'active-link' : '')}> Home </Link>
          <Link onClick={() => {changeTab(1);}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 1 ? 'active-link' : '')}> Coffee Shops </Link>
          <Link onClick={() => {changeTab(2);}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 2 ? 'active-link' : '')}> Products </Link>
          <Link onClick={() => {changeTab(3);}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 3 ? 'active-link' : '')}> Pets </Link>
          <Link onClick={toggleContacts} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 4 ? 'active-link' : '')}> Contact </Link>
          <div onClick={toggleSideNav} id="menu-bar-icon" className="p-2 cur-pointer"> <MenuIcon /> </div>
        </nav>

        <nav id="side-nav">
          <Link onClick={() => {changeTab(0);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 0 ? 'active-link' : '')}> Home </Link>
          <Link onClick={() => {changeTab(1);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 1 ? 'active-link' : '')}> Coffee Shops </Link>
          <Link onClick={() => {changeTab(2);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 2 ? 'active-link' : '')}> Products </Link>
          <Link onClick={() => {changeTab(3);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 3 ? 'active-link' : '')}> Pets </Link>
          <Link onClick={toggleContacts} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 4 ? 'active-link' : '')}> Contact </Link>
        </nav>
        <div id="dimmer" onClick={dispatchDimmer}></div>

        <Route path="/" exact component={Homepage} />

        <footer>
          <Footer />
        </footer>

        <Box hidden={contactsHidden}>
          <Contact />
        </Box>

      </Router>
    </globalState.Provider>
  </>;
}

export default App;
