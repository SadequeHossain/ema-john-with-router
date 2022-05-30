import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventroy/Inventory';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './cotext/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div>

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            {/* <Route path="/inventory" element={<Inventory></Inventory>} /> */}
            <Route exact path="/" element={<Shop></Shop>} />
            <Route path="/shop" element={<Shop></Shop>} />
            <Route path="/orderReview" element={<OrderReview></OrderReview>} />
            {/* <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>} /> */}
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            {/* <Route path="/shipping" element={<Shipping></Shipping>} /> */}
            <Route
              path="/shipping"
              element={<PrivateRoute>
                <Shipping></Shipping>
              </PrivateRoute>}
            >
            </Route>
            <Route
              path="/placeorder"
              element={<PrivateRoute>
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>}
            >
            </Route>
            <Route
              path="/inventory"
              element={<PrivateRoute>
                <Inventory></Inventory>
              </PrivateRoute>}
            >
            </Route>
            <Route path="*" element={<NotFound></NotFound>} />

          </Routes>

        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
