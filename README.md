# k6-openapi-typescript

Define your API schema in OpenAPI format, write scenarios using models generated from the OpenAPI schema, and conduct load testing with K6.

## Usage

### API Schema

Create your API schema in the OpenAPI format and save it as `schema.yaml`.

Then run `npm run schema` to generate TypeScript code.

### Scenarios

Compose your test scenarios in the `src/tests` directory. Vite will build files in that location.

### Run Load Test

Execute `npm run test`, and K6 will generate a load against the specified URL.