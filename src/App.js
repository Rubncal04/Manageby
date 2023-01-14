import { Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Products } from './components/products/table_products/IndexProducts';
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='App-content'>
        <NextUIProvider>
          <Routes>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        </NextUIProvider>
      </div>
    </div>
  );
}

export default App;
