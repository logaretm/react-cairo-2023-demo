import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // schema: 'http://localhost:4000/graphql',
  schema: '../schema.graphql',
  documents: ['./src/graphql/**/*.gql'],
  generates: {
    './src/types/graphql.gen.ts': {
      plugins: ['typescript'],
    },
    './': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.ts',
        baseTypesPath: './src/types/graphql.gen.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },
  config: {
    addOperationExport: true,
    documentMode: 'documentNode',
    enumsAsTypes: true,
    dedupeFragments: true,
  },
};

export default config;
