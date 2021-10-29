import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Home/Header/Header';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import AddNewSpot from './pages/AddNewSpot/AddNewSpot';
import BookingService from './pages/BookingService/BookingService';
import BookOrder from './pages/BookOrder/BookOrder';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addNewSpot">
            <AddNewSpot></AddNewSpot>
          </Route>
          <Route path="/services">
            <BookingService></BookingService>
          </Route>
          <Route path="/booking/:serviceId">
            <BookOrder></BookOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
