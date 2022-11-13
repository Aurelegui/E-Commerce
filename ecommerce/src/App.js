import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductList from "./Pages/ProductList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Link
} from 'react-router-dom';

const user = true;

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Home />
    //   </header>
    // </div>
    <Router>
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
    </Router>
  );
}

export default App;
