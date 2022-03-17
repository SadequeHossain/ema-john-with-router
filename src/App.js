import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventroy/Inventory';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/inventory" element={<Inventory></Inventory>} />
          <Route exact path="/" element={<Shop></Shop>} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route path="/orderReview" element={<OrderReview></OrderReview>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
