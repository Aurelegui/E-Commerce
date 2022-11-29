import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductList from "./Pages/ProductList";
import ScrollToTop from './Components/ScrollToTop';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const user = true;

function App() {

  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='products' element={<ProductList />} >
                <Route path=':category' element={<ProductList />} />
              </Route>
              <Route path='product' element={<Product />} >
                <Route path=':id' element={<Product />} />
              </Route>
              <Route path='cart' element={<Cart />} >
                {/* <Route path=':id' element={<Cart />} /> */}
              </Route>
              <Route path='login' element={user ? <Navigate to="/" replace /> : <Login />} />
              <Route path='register' element={user ? <Navigate to="/" replace /> : <Register />} />
            </Route>
            {/* <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} /> */}
          </Routes>
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
