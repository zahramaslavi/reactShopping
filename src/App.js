import logo from './logo.svg';
// import './App.css';

import Navbar from './components/Navbar/Navbar';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';

import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route path="/products" component={Products}></Route>
      <Route path="/cart" component={Cart}></Route>

    </Router>
  );
}

export default App;
