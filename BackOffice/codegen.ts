
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://if67oozt.api.sanity.io/v2023-08-01/graphql/production/default",
    documents: "app/**/*.gql",
    emitLegacyCommonJSImports: false,
    generates: {
        "app/types/gql/builds/": {
            preset: "client",
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request',
            ]
        },
        "./graphql.schema.json": {
            plugins: ["introspection"]
        }
    }
};

export default config;
