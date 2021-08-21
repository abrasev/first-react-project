import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import CarsForSale from './components/pages/CarsForSale';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import RecomendedServices from './components/pages/RecomendedServices';



function App() {
  return (
    <div className="App">      
      <Router>
      <Nav></Nav>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/carsForSale" component={CarsForSale}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/recomendedServices" component={RecomendedServices}></Route>
          <Route path="/" component={Home}></Route>          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
