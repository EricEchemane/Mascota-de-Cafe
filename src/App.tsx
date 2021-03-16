import globalState from './api/context';
import {useState, useEffect, useRef} from "react";
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
  const initialScroll = useRef(0);

  // const getAllStates = useCallback(async () => {
  //   const db = firebase.firestore();

  //   const coffeeProducts = db.collection("collection_coffee_products");
  //   const storyItems = db.collection("collection_stories");

  //   let data = await coffeeProducts.get();

  //   const items = [] as any;
  //   data.docs.forEach((coffee: any) => {
  //     items.push(coffee.data());
  //   });

  //   const data2 = await storyItems.get();

  //   const items2 = [] as any;
  //   data2.docs.forEach((story: any) => {
  //     items2.push(story.data());
  //   });

  //   return {...states, coffees: items, stories: items2};
  // }, [states]);

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

  useEffect(() => {

    window.addEventListener('scroll', () => {
      const y = window.pageYOffset;
      if (y < initialScroll.current) var top = '0';
      else top = '-50px';
      const nav = document.getElementById('navbar');
      if (nav) nav.style.top = top;
      initialScroll.current = y;
    });

  });

  const homepage = ((!states.stories.length && !states.coffees.length) ? <div></div> : <Route path="/" exact component={Homepage} />);

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

        {homepage}

        <footer>
          <Footer />
        </footer>
      </Router>
    </globalState.Provider>
  </>;
}

export default App;
