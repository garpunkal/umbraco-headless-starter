import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input:
        'http://localhost:15560/umbraco/swagger/delivery/swagger.json',
    output: {
        format: 'prettier',
        lint: 'eslint',
        path: './src/scripts/api',
    },
    plugins: [
        '@hey-api/client-fetch',
        '@hey-api/schemas',
        {
            name: '@hey-api/transformers',
            dates: true,         
        },
        {
            enums: 'javascript',
            name: '@hey-api/typescript',
            readOnlyWriteOnlyBehavior: 'off'
        },
        {
            name: '@hey-api/sdk',
            asClass: true,
        },
        {
            name: '@hey-api/client-fetch',
            baseUrl: false,
        }
        
    ],
});
