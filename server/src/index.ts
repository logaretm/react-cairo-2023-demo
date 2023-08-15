import { createServer } from 'node:http';
import path from 'path';
import { createYoga, createSchema } from 'graphql-yoga';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { fileURLToPath } from 'url';
import { Resolvers } from './graphql-types';
import type { Product } from './graphql-types';

const images = [
  'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
  'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
  'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
  'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
  'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
  'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
];

const products: Omit<Product, 'id'>[] = [
  {
    name: 'Earthen Bottle',
    price: 48,
    imageSrc: images[0],
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    name: 'Nomad Tumbler',
    price: 35,
    imageSrc: images[1],
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    name: 'Focus Paper Refill',
    price: 89,
    imageSrc: images[2],
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[3],
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[4],
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[5],
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    name: 'Earthen Bottle',
    price: 48,
    imageSrc: images[6],
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    name: 'Nomad Tumbler',
    price: 35,
    imageSrc: images[7],
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    name: 'Focus Paper Refill',
    price: 89,
    imageSrc: images[0],
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[1],
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[2],
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[3],
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    name: 'Earthen Bottle',
    price: 48,
    imageSrc: images[4],
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    name: 'Nomad Tumbler',
    price: 35,
    imageSrc: images[5],

    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    name: 'Focus Paper Refill',
    price: 89,
    imageSrc: images[6],
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[7],
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[0],

    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35,
    imageSrc: images[1],
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = loadSchemaSync('./schema.graphql', {
  cwd: __dirname, // without ``
  assumeValid: true,
  assumeValidSDL: true,
  skipGraphQLImport: true,
  loaders: [new GraphQLFileLoader()],
});

const resolvers: Resolvers = {
  Query: {
    products: () => {
      return [...products].map((product, index) => ({
        id: String(index + 1),
        ...product,
      }));
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
