import { useQuery } from 'urql';
import { ProductsDocument } from './graphql/Products';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const [result] = useQuery({ query: ProductsDocument });
  const { data, fetching, error } = result;

  if (fetching) {
    return <p className="text-xl">Loading...</p>;
  }

  if (error) {
    return <p>Oh no... {error.message}</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.products.map((product) => <ProductCard {...product} />)}
        </div>
      </div>
    </div>
  );
}
