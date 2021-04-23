import Navbar from './components/Navbar/index';
import Landing from './pages/Landing';
import CryptoLists from './pages/CryptoLists';
import Features from './pages/Feature';
import Feature2 from './pages/Feature2';
import UpdateShop from './pages/UpdateShop';
import Footer from './pages/Footer';
import { Switch, Route } from 'react-router-dom';
import SerchOtherShop from './pages/SerchOtherShop';
import NewNavbar from './components/NewNavbar';

export default function Router() {
  return (
    <div>
      <Switch>
        {/* <Route path="/flower/:id">
          <Navbar />
        </Route> */}
        <Route path="/OtherShop">
          <NewNavbar />
          <SerchOtherShop />
        </Route>

        <Route path="/updateOurShop">
          <NewNavbar />
          <UpdateShop />
        </Route>

        <Route path="/">
          <Navbar />
          <Landing />
          <CryptoLists />
          <Features />
          <Feature2 />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}
