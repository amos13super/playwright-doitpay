import Ajv from 'ajv';
const ajv = new Ajv();

export function validateSchema(schema: object, data: any) {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    console.error(ajv.errors);
  }
  return valid;
}
