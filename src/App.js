import React, { useReducer } from 'react';

import Home from './pages/Home'
import { MockData } from './mockData';

export const ProductContext = React.createContext(MockData);

const reducer = (state, action) => {

}

function App() {

  const [productData , dispatch] = useReducer(reducer, MockData.items);
  return (
    <div>
      <ProductContext.Provider value={{productData:productData, productDispatch: dispatch}} >
        <Home />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
