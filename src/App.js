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
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addNewSpot">
              <AddNewSpot></AddNewSpot>
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <Route path="/services">
              <BookingService></BookingService>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <BookOrder></BookOrder>
            </PrivateRoute>
            <Route path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
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
      </AuthProvider>
    </div>
  );
}

export default App;
