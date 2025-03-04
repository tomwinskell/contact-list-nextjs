import { RegexValidationObject } from './definitions';
import { ValidationKey } from '../lib/definitions';

export const validationRegex: RegexValidationObject = {
  firstName: /^[a-zA-Z]{3,}$/,
  lastName: /^[a-zA-Z]{3,}$/,
  email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
};

export function validate(name: string, input: string): boolean {
  return validationRegex[name as ValidationKey].test(input);
}
