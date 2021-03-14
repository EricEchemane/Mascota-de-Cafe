import globalState from './api/context';
import {useState, useEffect, useRef, useCallback} from "react";
import firebase from './api/firebase';
// pages
import Homepage from '../src/pages/Homepage';

import {
  Route,
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
// icons
import MenuIcon from '@material-ui/icons/Menu';

function App () {

  const [states, setStates] = useState({
    activeTab: 0,
    coffees: [],
    stories: []
  });
  const sideNav_isClose = useRef(true);
  const initialScroll = useRef(0);

  const getAllStates = useCallback(async () => {
    const db = firebase.firestore();

    const coffeeProducts = db.collection("collection_coffee_products");
    const storyItems = db.collection("collection_stories");

    let data = await coffeeProducts.get();

    const items = [] as any;
    data.docs.forEach((coffee: any) => {
      items.push(coffee.data());
    });

    const data2 = await storyItems.get();

    const items2 = [] as any;
    data2.docs.forEach((story: any) => {
      items2.push(story.data());
    });

    return {...states, coffees: items, stories: items2};
  }, [states]);

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

  useEffect(() => {
    (async () => {
      setStates(await getAllStates());
    })();

    window.addEventListener('scroll', () => {
      const y = window.pageYOffset;
      if (y < initialScroll.current) var top = '0';
      else top = '-50px';
      const nav = document.getElementById('navbar');
      if (nav) nav.style.top = top;
      initialScroll.current = y;
    });

  }, [getAllStates]);

  const homepage = ((!states.stories.length && !states.coffees.length) ? <div></div> : <Route path="/" exact component={Homepage} />);

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
          <Link onClick={() => {setStates({...states, activeTab: 0});}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 0 ? 'active-link' : '')}> Home </Link>
          <Link onClick={() => {setStates({...states, activeTab: 1});}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 1 ? 'active-link' : '')}> Coffee Shops </Link>
          <Link onClick={() => {setStates({...states, activeTab: 2});}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 2 ? 'active-link' : '')}> Products </Link>
          <Link onClick={() => {setStates({...states, activeTab: 3});}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 3 ? 'active-link' : '')}> Pets </Link>
          <Link onClick={() => {setStates({...states, activeTab: 4});}} to="/" className={"dark-1 p-3 nav-link " + (states.activeTab === 4 ? 'active-link' : '')}> Contact </Link>
          <div onClick={toggleSideNav} id="menu-bar-icon" className="p-2 cur-pointer"> <MenuIcon /> </div>
        </nav>

        <nav id="side-nav">
          <Link onClick={() => {setStates({...states, activeTab: 0});}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 0 ? 'active-link' : '')}> Home </Link>
          <Link onClick={() => {setStates({...states, activeTab: 1});}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 1 ? 'active-link' : '')}> Coffee Shops </Link>
          <Link onClick={() => {setStates({...states, activeTab: 2});}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 2 ? 'active-link' : '')}> Products </Link>
          <Link onClick={() => {setStates({...states, activeTab: 3});}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 3 ? 'active-link' : '')}> Pets </Link>
          <Link onClick={() => {setStates({...states, activeTab: 4});}} to="/" className={"dark-1 p-1 ml-2 " + (states.activeTab === 4 ? 'active-link' : '')}> Contact </Link>
        </nav>
        <div id="dimmer" onClick={toggleSideNav}></div>

        {homepage}

      </Router>
    </globalState.Provider>
  </>;
}

export default App;
