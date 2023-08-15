import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import { ProductList } from './ProductList';
import './App.css';

const client = new Client({
  url: 'http://localhost:4000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  return (
    <>
      <Provider value={client}>
        <ProductList />
      </Provider>
    </>
  );
}

export default App;
