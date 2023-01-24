import { Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Products } from './components/products/table_products/IndexProducts';
import { NewProduct } from './components/products/new_product/NewProduct';
import './App.css'
import { NewOrder } from './components/orders/NewOrder';

function App() {
  return (
    <div className='App'>
      <div className='App-content'>
        <NextUIProvider>
          <Routes>
            <Route path='/products' element={<Products/>}/>
            <Route path='/new-product' element={<NewProduct/>}/>
            <Route path='/product/:id/orders' element={<NewOrder/>}/>
          </Routes>
        </NextUIProvider>
      </div>
    </div>
  );
}

export default App;
