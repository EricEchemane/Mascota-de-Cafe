import globalState from './api/context';
import {useState, useEffect, useRef} from "react";
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

  const db = firebase.firestore();
  const [activeTab, set_activeTab] = useState(0);
  const [coffees, setCoffees] = useState([]);
  const [stories, setStories] = useState([]);
  const sideNav_isClose = useRef(true);

  async function setCoffeeItems () {
    const coffeeProducts = db.collection("collection_coffee_products");
    const data = await coffeeProducts.get();
    const items = [] as any;
    data.docs.forEach((coffee: any) => {
      items.push(coffee.data());
    });
    setCoffees(items);
  }

  async function setStoryItems () {
    const storyItems = db.collection("collection_stories");
    const data = await storyItems.get();
    const items = [] as any;
    data.docs.forEach((story: any) => {
      items.push(story.data());
      // console.log(story.data().dateTime.toDate().getTime());
    });
    setStories(items);
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
    setCoffeeItems();
    setStoryItems();
  }, []);

  return <>
    <globalState.Provider value={{
      coffees,
      setCoffees,
      stories
    }}>

      <Router>
        <nav
          id="navbar"
          className="glass d-flex flex-align-center">

          <Link to="/" className="dark-1 p-3 flex-1">
            <h3>Mascota de Cafe</h3>
          </Link>
          <Link onClick={() => {set_activeTab(0);}} to="/" className={"dark-1 p-3 nav-link " + (activeTab === 0 ? 'active-link' : '')}> Home </Link>
          <Link onClick={() => {set_activeTab(1);}} to="/" className={"dark-1 p-3 nav-link " + (activeTab === 1 ? 'active-link' : '')}> Coffee Shops </Link>
          <Link onClick={() => {set_activeTab(2);}} to="/" className={"dark-1 p-3 nav-link " + (activeTab === 2 ? 'active-link' : '')}> Products </Link>
          <Link onClick={() => {set_activeTab(3);}} to="/" className={"dark-1 p-3 nav-link " + (activeTab === 3 ? 'active-link' : '')}> Pets </Link>
          <Link onClick={() => {set_activeTab(4);}} to="/" className={"dark-1 p-3 nav-link " + (activeTab === 4 ? 'active-link' : '')}> Contact </Link>
          <div onClick={toggleSideNav} id="menu-bar-icon" className="p-2 cur-pointer"> <MenuIcon /> </div>
        </nav>

        <nav id="side-nav">
          <Link onClick={() => {set_activeTab(0);}} to="/" className={"dark-1 p-1 ml-2 " + (activeTab === 0 ? 'active-link' : '')}> Home </Link>
          <Link onClick={() => {set_activeTab(1);}} to="/" className={"dark-1 p-1 ml-2 " + (activeTab === 1 ? 'active-link' : '')}> Coffee Shops </Link>
          <Link onClick={() => {set_activeTab(2);}} to="/" className={"dark-1 p-1 ml-2 " + (activeTab === 2 ? 'active-link' : '')}> Products </Link>
          <Link onClick={() => {set_activeTab(3);}} to="/" className={"dark-1 p-1 ml-2 " + (activeTab === 3 ? 'active-link' : '')}> Pets </Link>
          <Link onClick={() => {set_activeTab(4);}} to="/" className={"dark-1 p-1 ml-2 " + (activeTab === 4 ? 'active-link' : '')}> Contact </Link>
        </nav>
        <div id="dimmer" onClick={toggleSideNav}></div>

        <Route path="/" exact component={Homepage} />

      </Router>
    </globalState.Provider>
  </>;
}

export default App;
