import globalState from './api/context';
import {useState, useRef} from "react";
// pages
import Homepage from '../src/pages/Homepage';
import Footer from '../src/components/Footer';

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
    activeTab: 0,
    coffees: coffees_data,
    stories: stories_data
  });
  const sideNav_isClose = useRef(true);

  function dim (open: boolean) {
    const dimmer = document.getElementById('dimmer');
    if (dimmer) {
      let display = 'none';
      let opa = '0';
      if (open) {
        display = 'block';
        opa = '1';
      }
      dimmer.style.display = display;
      setTimeout(() => {
        dimmer.style.opacity = opa;
      }, 100);
    }
  }

  function toggleSideNav () {
    const dimmer = document.getElementById('dimmer');
    const sideNav = document.getElementById('side-nav');
    if (sideNav_isClose.current) {
      var right = '0';
      var display = 'block';
      var opa = '1';
    }
    else {
      right = '-260px';
      display = 'none';
      opa = '0';
    }
    if (dimmer) {
      dimmer.style.display = display;
      setTimeout(() => {
        dimmer.style.opacity = opa;
      }, 100);
    }
    if (sideNav) sideNav.style.right = right;
    sideNav_isClose.current = !sideNav_isClose.current;
  }


  function changeTab (n: number) {
    setStates({...states, activeTab: n});
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
          <Link onClick={() => {changeTab(4);}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 4 ? 'active-link' : '')}> Contact </Link>
          <div onClick={toggleSideNav} id="menu-bar-icon" className="p-2 cur-pointer"> <MenuIcon /> </div>
        </nav>

        <nav id="side-nav">
          <Link onClick={() => {changeTab(0);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 0 ? 'active-link' : '')}> Home </Link>
          <Link onClick={() => {changeTab(1);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 1 ? 'active-link' : '')}> Coffee Shops </Link>
          <Link onClick={() => {changeTab(2);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 2 ? 'active-link' : '')}> Products </Link>
          <Link onClick={() => {changeTab(3);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 3 ? 'active-link' : '')}> Pets </Link>
          <Link onClick={() => {changeTab(4);}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 4 ? 'active-link' : '')}> Contact </Link>
        </nav>
        <div id="dimmer" onClick={toggleSideNav}></div>

        <Route path="/" exact component={Homepage} />

        <footer>
          <Footer />
        </footer>
      </Router>
    </globalState.Provider>
  </>;
}

export default App;
