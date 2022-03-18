import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventroy/Inventory';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/inventory" element={<Inventory></Inventory>} />
          <Route exact path="/" element={<Shop></Shop>} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route path="/orderReview" element={<OrderReview></OrderReview>} />
          <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>} />

          <Route path="*" element={<NotFound></NotFound>} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
